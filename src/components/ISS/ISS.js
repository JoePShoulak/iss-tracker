import issModel from "../../models/iss.obj";

const latLongToCartesian = (radius, lat, lon) => {
  lat *= (2 * Math.PI) / 360;
  lon *= (2 * Math.PI) / -360;
  lon -= Math.PI / 2;

  const x = radius * Math.cos(lon) * Math.cos(lat);
  const y = radius * Math.sin(lon) * Math.cos(lat);
  const z = radius * Math.sin(lat);

  return [x, -z, y];
};

class ISS {
  constructor(
    /** @type {import("p5").p5InstanceExtensions} */
    p5,
    size
  ) {
    p5.loadModel(issModel, model => {
      this.model = model;
    });

    this.p5 = p5;
    this.lat = undefined;
    this.lon = undefined;
    this.scale = size / 2000;

    this.radius = size + 25;
    this.model = undefined;
  }

  get position() {
    return latLongToCartesian(this.radius, this.lat, this.lon);
  }

  get ready() {
    return this.lat && this.lon && this.model;
  }

  setData({ latitude, longitude }) {
    this.lat = latitude;
    this.lon = longitude;
  }

  draw() {
    this.p5.push();

    // Line
    this.p5.strokeWeight(4);
    this.p5.stroke("green");
    this.p5.line(0, 0, 0, ...this.position);

    // Model
    this.p5.translate(...this.position);
    this.p5.scale(this.scale);
    this.p5.noStroke();
    this.p5.specularColor("gray");
    this.p5.model(this.model);

    this.p5.pop();
  }
}

export default ISS;
