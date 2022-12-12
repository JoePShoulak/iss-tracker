import Earth from "./Earth";
import ISS from "./ISS";
import Roboto from "../../fonts/Roboto-Regular.ttf";

const sketch = (
  /** @type {import("p5").p5InstanceExtensions} */
  p5
) => {
  let earth;
  let iss;
  let font;
  let sun;

  const rotateFromMouse = p5 => {
    const dHeight = p5.height / 2;
    const dWidth = p5.width / 2;

    const dy = p5.mouseY - dHeight;
    const dx = p5.mouseX - dWidth;

    p5.rotateX(p5.map(dy, -dHeight, dHeight, p5.PI / 2, -p5.PI / 2));
    p5.rotateY(p5.map(dx, -dWidth, dWidth, -p5.PI, p5.PI));
  };

  p5.setup = () => {
    p5.createCanvas(600, 600, p5.WEBGL);

    p5.textSize(50);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.loadFont(Roboto, f => p5.textFont((font = f)));

    const constraint = p5.min(p5.height, p5.width) / 4;

    earth = new Earth(p5, constraint);
    iss = new ISS(p5, constraint);

    sun = {
      position: p5.createVector(-0.7, 0, -1),
      color: p5.color("white"),
      draw: function () {
        p5.directionalLight(this.color, this.position);
      },
    };
  };

  p5.updateWithProps = props => (props.iss ? iss.setData(props.iss) : null);

  p5.draw = () => {
    p5.background(0);
    // TODO: Can we remove font by checking p5.textFont()?
    if (!earth.ready || !iss.ready) {
      if (font) p5.text("Loading...", 0, 0);
    } else {
      rotateFromMouse(p5);

      sun.draw();
      earth.draw();
      iss.draw();
    }
  };
};

export default sketch;
