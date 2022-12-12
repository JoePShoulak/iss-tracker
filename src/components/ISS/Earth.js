import earthImageFile from "../../images/earth.jpg";

class Earth {
  constructor(
    /** @type {import("p5").p5InstanceExtensions} */
    p5,
    size
  ) {
    p5.loadImage(earthImageFile, img => {
      this.texture = img;
    });

    this.p5 = p5;
    this.size = size;
  }

  get ready() {
    return this.texture;
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
