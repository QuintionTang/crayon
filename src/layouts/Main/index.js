import Velocity from "velocity-animate";

const enter = (el, done) => {
    Velocity(el, "slideDown", { duration: 300 }, { complete: done });
};

const leave = (el, done) => {
    Velocity(el, "slideUp", { duration: 300 }, { complete: done });
};

export { enter, leave };
