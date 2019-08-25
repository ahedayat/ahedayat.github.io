import React from "react";

const pytorch_svg = () => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      focusable="false"
      width="0.83em"
      height="1em"
      style={{
        msTransform: "rotate(360deg)",
        WebkitTransform: "rotate(360deg)",
        transform: "rotate(360deg)"
      }}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 256 310"
      class="iconify"
      data-icon="logos-pytorch"
      data-inline="false"
    >
      <path
        d="M218.281 90.106c50.292 50.292 50.292 130.969 0 181.61-49.244 50.292-130.27 50.292-180.562 0s-50.292-131.318 0-181.61L127.825 0v45.053l-8.382 8.382-59.721 59.722c-37.72 37.02-37.72 97.79 0 135.509 37.02 37.719 97.79 37.719 135.509 0 37.719-37.02 37.719-97.79 0-135.51l23.05-23.05zm-45.053-5.588c-9.259 0-16.764-7.505-16.764-16.764 0-9.258 7.505-16.764 16.764-16.764 9.258 0 16.764 7.506 16.764 16.764 0 9.259-7.506 16.764-16.764 16.764z"
        fill="rgb(28, 188, 173)"
      />
    </svg>
  </div>
);

const pytorch_img = () => (
  <div>
    <span
      class="iconify"
      data-icon="logos-pytorch"
      data-inline="false"
      style={{ color: "rgb(28,188,173)" }}
    />
  </div>
);

const pytorch = {
  title: "PyTorch",
  icon: pytorch_img,
  svg_icon: pytorch_svg,
  value: "70"
};

export default pytorch;
