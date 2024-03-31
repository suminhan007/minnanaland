import React from "react";

type Props = {};

const Application: React.FC<Props> = ({}) => {
  return (
    <div class="ac-navbar-left-panel ac-navbar-left-panel-mobile">
      <a
        class="ac-navbar-left-panel-return-home ac-navbar-left-panel-home-external"
        href="https://arco.design"
      >
        <svg width="143" height="24">
          <g fill="none">
            <path
              d="M3.878 11.98l7.372-7.55a5.096 5.096 0 017.292 0l.08.083a5.226 5.226 0 010 7.302l-7.372 7.55a5.096 5.096 0 01-7.292 0l-.08-.083a5.226 5.226 0 010-7.302z"
              fill="#12D2AC"
            ></path>
            <path
              d="M18.548 4.43l7.292 7.467a5.344 5.344 0 010 7.467 5.096 5.096 0 01-7.292 0l-7.292-7.467a5.344 5.344 0 010-7.467 5.096 5.096 0 017.292 0z"
              fill="#307AF2"
            ></path>
            <path
              d="M18.632 4.522l3.553 3.638-7.292 7.467L7.601 8.16l3.553-3.638a5.226 5.226 0 017.478 0z"
              fill="#0057FE"
            ></path>
            <g fill="var(--color-text-1)">
              <path d="M78.644 19.268a1.85 1.85 0 100-3.7 1.85 1.85 0 000 3.7z"></path>
            </g>
            <path
              d="M45.454 8.335v10.659h-2.805v-1.177c-.693.858-1.727 1.452-3.19 1.452-2.937 0-5.159-2.409-5.159-5.61 0-3.201 2.222-5.61 5.159-5.61 1.463 0 2.486.594 3.19 1.463V8.335h2.805zm-5.467 2.387c-1.683 0-2.75 1.309-2.75 2.937s1.067 2.937 2.75 2.937c1.639 0 2.75-1.254 2.75-2.937 0-1.683-1.111-2.937-2.75-2.937zm13.167-2.673c.616 0 1.1.088 1.496.231l-.429 2.849c-.473-.209-1.155-.341-1.738-.341-1.331 0-2.244.814-2.244 2.398v5.808h-2.871V8.335h2.783v1.166c.671-1.001 1.694-1.452 3.003-1.452zm7.007 0c1.782 0 3.289.726 4.268 2.013l-2.068 1.727c-.649-.693-1.342-1.067-2.277-1.067-1.485 0-2.673 1.166-2.673 2.937 0 1.782 1.177 2.937 2.662 2.937.924 0 1.716-.418 2.321-1.078l2.046 1.749c-1.001 1.287-2.497 2.002-4.279 2.002-3.399 0-5.676-2.376-5.676-5.61 0-3.223 2.277-5.61 5.676-5.61zm10.12 0c3.322 0 5.775 2.398 5.775 5.61s-2.453 5.61-5.775 5.61c-3.311 0-5.753-2.398-5.753-5.61s2.442-5.61 5.753-5.61zm0 2.673c-1.617 0-2.827 1.21-2.827 2.937 0 1.727 1.21 2.937 2.827 2.937s2.838-1.21 2.838-2.937c0-1.727-1.221-2.937-2.838-2.937zm16.247-2.673c1.43 0 2.442.561 3.135 1.397V3.154h2.86v15.84h-2.805v-1.177c-.693.858-1.727 1.452-3.19 1.452-2.937 0-5.159-2.409-5.159-5.61 0-3.201 2.222-5.61 5.159-5.61zm.528 2.673c-1.683 0-2.75 1.309-2.75 2.937s1.067 2.937 2.75 2.937c1.639 0 2.75-1.254 2.75-2.937 0-1.683-1.111-2.937-2.75-2.937zm12.111-2.673c3.069 0 5.17 2.277 5.181 5.599 0 .33-.022.726-.055.968h-7.557c.308 1.54 1.386 2.211 2.739 2.211.924 0 1.925-.374 2.695-1.023l1.683 1.848c-1.21 1.111-2.75 1.617-4.543 1.617-3.267 0-5.533-2.222-5.533-5.577s2.2-5.643 5.39-5.643zm-.022 2.475c-1.353 0-2.145.814-2.398 2.134h4.719c-.264-1.364-1.089-2.134-2.321-2.134zm14.982-1.452l-.968 2.233c-.847-.418-2.2-.858-3.399-.869-1.089 0-1.639.385-1.639.968 0 .616.77.77 1.738.913l.946.143c2.31.352 3.597 1.386 3.597 3.19 0 2.2-1.804 3.619-4.895 3.619-1.452 0-3.355-.275-4.741-1.254l1.133-2.178c.913.605 2.024 1.045 3.63 1.045 1.331 0 1.969-.374 1.969-1.001 0-.517-.539-.803-1.771-.979l-.869-.121c-2.464-.341-3.685-1.419-3.685-3.234 0-2.189 1.694-3.487 4.499-3.487 1.705 0 3.036.319 4.455 1.012zm4.312-.737v10.659h-2.871V8.335h2.871zm-1.452-5.181c1.034 0 1.837.814 1.837 1.848 0 1.034-.803 1.826-1.837 1.826a1.794 1.794 0 01-1.826-1.826c0-1.034.792-1.848 1.826-1.848zm7.612 4.895c1.485 0 2.574.572 3.3 1.474V8.335h2.816v9.779c0 3.421-2.233 5.489-5.753 5.489-1.683 0-3.465-.44-4.664-1.287l1.023-2.343c1.067.704 2.244 1.089 3.52 1.089 1.782 0 3.036-.99 3.036-2.827v-.748c-.726.891-1.804 1.441-3.278 1.441-2.596 0-4.906-2.167-4.906-5.434 0-3.278 2.31-5.445 4.906-5.445zm.726 2.64c-1.639 0-2.684 1.254-2.684 2.805 0 1.54 1.045 2.794 2.684 2.794 1.595 0 2.673-1.21 2.673-2.794 0-1.595-1.078-2.805-2.673-2.805zm13.233-2.64c2.42 0 4.147 1.683 4.147 4.158v6.787h-2.871v-5.863c0-1.54-.77-2.387-2.079-2.387-1.232 0-2.255.803-2.255 2.409v5.841h-2.871V8.335h2.794v1.254c.759-1.133 1.925-1.54 3.135-1.54z"
              fill="var(--color-text-1)"
            ></path>
          </g>
        </svg>
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          viewBox="0 0 48 48"
          aria-hidden="true"
          focusable="false"
          class="arco-icon arco-icon-arrow-right"
        >
          <path d="m27.728 11.27 12.728 12.728-12.728 12.728M5 24h34.295"></path>
        </svg>
      </a>
      <div class="ac-navbar-left-panel-list">
        <a
          class="ac-navbar-left-panel-item"
          href="https://pro.arco.design/"
          style="opacity: 1; transform: translateY(0px);"
        >
          <div class="ac-navbar-left-panel-item-logo">
            <span class="ac-navbar-left-panel-item-logo-common">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 21.0001C15.5834 21.0001 21 14.977 21 7.80908L16 7.80908C16 12.4034 12.6368 15.9981 8 15.9981L8 21.0001Z"
                  fill="#6A98FF"
                ></path>{" "}
                <path d="M3 3H8V16.0052H3V3Z" fill="#165DFF"></path>{" "}
                <path d="M16 3V8.002H3V3H16Z" fill="#165DFF"></path>{" "}
                <path d="M21 3V8.002H16V3H21Z" fill="#165DFF"></path>{" "}
              </svg>
            </span>
            <span class="ac-navbar-left-panel-item-logo-active">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 21c7.583 0 13-6.023 13-13.19h-5c0 4.593-3.363 8.188-8 8.188V21z"
                  fill="#16D2AC"
                ></path>
                <path d="M3 3h5v13.005H3V3z" fill="#165DFF"></path>
                <path
                  d="M16 3v5.002H3V3h13zM21 3v5.002h-5V3h5z"
                  fill="#165DFF"
                ></path>
              </svg>
            </span>
          </div>
          <div class="ac-navbar-left-panel-item-text">
            <p class="ac-navbar-left-panel-item-text-title">Arco Pro</p>
            <span class="ac-navbar-left-panel-item-text-desc">
              中后台最佳实践
            </span>
          </div>
        </a>
        <a
          class="ac-navbar-left-panel-item"
          href="https://arco.design/themes"
          style="opacity: 1; transform: translateY(0px);"
        >
          <div class="ac-navbar-left-panel-item-logo">
            <span class="ac-navbar-left-panel-item-logo-common">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21C16.932 21 20.9374 17.0328 20.9993 12.1155L21.0001 12.0903V7.73684H21V9H15.0289C15.7919 9.77031 16.2632 10.8301 16.2632 12C16.2632 12.0529 16.2622 12.1056 16.2603 12.158C16.2576 12.2202 16.2525 12.3097 16.2432 12.4153C16.0344 14.5749 14.2144 16.2632 12 16.2632C9.64552 16.2632 7.73684 14.3545 7.73684 12C7.73684 9.64552 9.64552 7.73684 12 7.73684C13.1699 7.73684 14.2297 8.20806 15 8.97105V3H12H11.9276L11.8825 3.00075C6.9661 3.06365 3 7.06866 3 12C3 16.9706 7.02944 21 12 21Z"
                  fill="#165DFF"
                ></path>{" "}
                <rect x="15" y="3" width="6" height="6" fill="#6A98FF"></rect>{" "}
              </svg>
            </span>
            <span class="ac-navbar-left-panel-item-logo-active">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 16.2632C14.3545 16.2632 16.2632 14.3545 16.2632 12C16.2632 9.64552 14.3545 7.73684 12 7.73684C9.64552 7.73684 7.73684 9.64552 7.73684 12C7.73684 14.3545 9.64552 16.2632 12 16.2632Z"
                  fill="#165DFF"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.2633 7.73684H21.0001V12.0903C21.0001 12.0903 21.0001 12.0903 20.9871 12.4737C20.2498 12.4737 18.1887 12.4737 16.2377 12.4737C16.2611 12.237 16.2633 12.0642 16.2633 12.0642V7.73684Z"
                  fill="#165DFF"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.5263 3.01268C11.7332 3.00242 11.9276 3 11.9276 3H16.2632L16.2633 7.73684L11.9121 7.73684C11.9121 7.73684 11.7112 7.74131 11.5263 7.76245C11.5263 5.86414 11.5263 4.02419 11.5263 3.01268Z"
                  fill="#165DFF"
                ></path>{" "}
                <rect x="15" y="3" width="6" height="6" fill="#16D2AC"></rect>{" "}
              </svg>
            </span>
          </div>
          <div class="ac-navbar-left-panel-item-text">
            <p class="ac-navbar-left-panel-item-text-title">DesignLab</p>
            <span class="ac-navbar-left-panel-item-text-desc">
              设计系统配置平台
            </span>
          </div>
        </a>
        <a
          class="ac-navbar-left-panel-item"
          href="https://arco.design/material/"
          style="opacity: 1; transform: translateY(0px);"
        >
          <div class="ac-navbar-left-panel-item-logo">
            <span class="ac-navbar-left-panel-item-logo-common">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <circle cx="9" cy="12" r="7" fill="#6A98FF"></circle>{" "}
                <circle cx="15" cy="12" r="7" fill="#6A98FF"></circle>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0002 18.3264C9.63513 17.2029 8 14.7924 8 11.9999C8 9.20755 9.63503 6.79706 11.9999 5.67358C14.365 6.79702 16.0001 9.20757 16.0001 12C16.0001 14.7924 14.3651 17.2029 12.0002 18.3264Z"
                  fill="#165DFF"
                ></path>{" "}
              </svg>
            </span>
            <span class="ac-navbar-left-panel-item-logo-active">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <circle
                  opacity="0.84"
                  cx="9"
                  cy="12"
                  r="7"
                  fill="#16D2AC"
                ></circle>{" "}
                <circle cx="15" cy="12" r="7" fill="#6AA1FF"></circle>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0002 18.3264C9.63513 17.2029 8 14.7924 8 11.9999C8 9.20755 9.63503 6.79706 11.9999 5.67358C14.365 6.79702 16.0001 9.20757 16.0001 12C16.0001 14.7924 14.3651 17.2029 12.0002 18.3264Z"
                  fill="#165DFF"
                ></path>{" "}
              </svg>
            </span>
          </div>
          <div class="ac-navbar-left-panel-item-text">
            <p class="ac-navbar-left-panel-item-text-title">Material Market</p>
            <span class="ac-navbar-left-panel-item-text-desc">物料平台</span>
          </div>
        </a>
        <a
          class="ac-navbar-left-panel-item"
          href="https://arco.design/iconbox/"
          style="opacity: 1; transform: translateY(0px);"
        >
          <div class="ac-navbar-left-panel-item-logo">
            <span class="ac-navbar-left-panel-item-logo-common">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clip-path="url(#clip0_2354_13926)">
                  {" "}
                  <path
                    d="M3 5.02356L20.08 5.02356L20.08 22.1036L3 22.1036L3 5.02356Z"
                    fill="#165DFF"
                  ></path>{" "}
                  <path
                    d="M13.5526 1L3.00065 4.95814L3.00065 20.5906L13.5526 15.9009L13.5526 1Z"
                    fill="#165DFF"
                  ></path>{" "}
                  <path
                    d="M13.5517 5.05176H3V22.1318L13.5517 18.0798V5.05176Z"
                    fill="#739EFF"
                  ></path>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_2354_13926">
                    {" "}
                    <rect width="24" height="24" fill="white"></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
            </span>
            <span class="ac-navbar-left-panel-item-logo-active">
              <svg
                width="24'"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clip-path="url(#clip0_2354_13930)">
                  {" "}
                  <path
                    d="M3 5.02429L20.0821 5.02429L20.0821 22.1064L3 22.1064L3 5.02429Z"
                    fill="#165DFF"
                  ></path>{" "}
                  <path
                    d="M13.5538 1L3.00065 4.95862L3.00065 20.593L13.5538 15.9027L13.5538 1Z"
                    fill="#165DFF"
                  ></path>{" "}
                  <path
                    d="M13.553 5.05249H3V22.1346L13.553 18.0822V5.05249Z"
                    fill="#67DAC2"
                  ></path>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_2354_13930">
                    {" "}
                    <rect width="24" height="24" fill="white"></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
            </span>
          </div>
          <div class="ac-navbar-left-panel-item-text">
            <p class="ac-navbar-left-panel-item-text-title">IconBox</p>
            <span class="ac-navbar-left-panel-item-text-desc">图标平台</span>
          </div>
        </a>
        <a
          class="ac-navbar-left-panel-item"
          href="https://arco.design/palette/list"
          style="opacity: 1; transform: translateY(0px);"
        >
          <div class="ac-navbar-left-panel-item-logo">
            <span class="ac-navbar-left-panel-item-logo-common">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clip-path="url(#clip0_3:2)">
                  {" "}
                  <path
                    d="M2.87163 3.125H9.33278V7.07368L2.87163 13.8824V3.125Z"
                    fill="#165DFF"
                  ></path>{" "}
                  <rect
                    width="6.75222"
                    height="18.0059"
                    transform="matrix(0.676625 0.736328 -0.676625 0.736328 15.5322 3.38516)"
                    fill="#165DFF"
                    fill-opacity="0.5"
                  ></rect>{" "}
                  <path
                    d="M20.1014 14.8438L20.1014 21.875L6.38726 21.875C4.44563 21.875 2.87163 20.301 2.87163 18.3594V18.3594C2.87163 16.4177 4.44563 14.8437 6.38726 14.8437L20.1014 14.8438Z"
                    fill="#165DFF"
                  ></path>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_3:2">
                    {" "}
                    <rect width="24" height="24" fill="white"></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
            </span>
            <span class="ac-navbar-left-panel-item-logo-active">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clip-path="url(#clip0_3:2)">
                  {" "}
                  <path
                    d="M2.87163 3.125H9.33278V7.07368L2.87163 13.8824V3.125Z"
                    fill="#165DFF"
                  ></path>{" "}
                  <rect
                    width="6.75222"
                    height="18.0059"
                    transform="matrix(0.676625 0.736328 -0.676625 0.736328 15.5322 3.38516)"
                    fill="#16D2AC"
                  ></rect>{" "}
                  <path
                    d="M20.1014 14.8438L20.1014 21.875L6.38726 21.875C4.44563 21.875 2.87163 20.301 2.87163 18.3594V18.3594C2.87163 16.4177 4.44563 14.8437 6.38726 14.8437L20.1014 14.8438Z"
                    fill="#165DFF"
                  ></path>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_3:2">
                    {" "}
                    <rect width="24" height="24" fill="white"></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
            </span>
          </div>
          <div class="ac-navbar-left-panel-item-text">
            <p class="ac-navbar-left-panel-item-text-title">Platte</p>
            <span class="ac-navbar-left-panel-item-text-desc">
              色彩配置工具
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Application;
