import earthImageFile from "../../images/earth.jpg";

class Earth {
  constructor(
    /** @type {import("p5").p5InstanceExtensions} */
    p5,
    size
  ) {
    p5.loadImage(earthImageFile, img => (this.texture = img));

    this.p5 = p5;
    this.size = size;

    this.color = p5.color("blue");
    this.texture = undefined;
  }

  get ready() {
    return this.texture !== undefined;
  }

  draw() {
    this.p5.push();

    this.p5.noStroke();
    this.p5.texture(this.texture);
    this.p5.sphere(this.size);

    this.p5.pop();
  }
}

export default Earth;
