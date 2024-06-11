import React from 'react'
import "./Myskills.css"
const Myskills = () => {
  return (
   <>
    <div className="MyskillsPage">
    <div className="MyskillsPage-heading">MY SKILLS</div>
    <div className="MySkillsPage-para">This is my techstack :-) </div>
    <div className="MySkillsIconContainer">

      {/* html */}
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
	<path fill="#e44d26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"></path>
	<path fill="#f16529" d="m64 116.8l36.378-10.086l8.559-95.878H64z"></path>
	<path fill="#ebebeb" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"></path>
	<path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"></path>
  </svg>

   {/* css */}
   <svg xmlns="http://www.w3.org/2000/svg" width="0.71em" height="1em" viewBox="0 0 256 361">
	<path fill="#264de4" d="M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36z"></path>
	<path fill="#2965f1" d="m212.417 314.547l19.86-222.49H128V337.95z"></path>
	<path fill="#ebebeb" d="m53.669 188.636l2.862 31.937H128v-31.937zm-5.752-64.641l2.903 31.937H128v-31.937zM128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04z"></path>
	<path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484zm46.417 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9zm46.418 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32z"></path>
	<path fill="#fff" d="m202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08z"></path>
</svg>

{/* javascript */}
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
	<path fill="#f7df1e" d="M0 0h256v256H0z"></path>
	<path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"></path>
</svg>

{/* ExpressJs */}
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
	<g fill="none">
		<rect width={256} height={256} fill="#242938" rx={60}></rect>
		<path fill="#fff" d="M228 182.937a12.732 12.732 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659l-39.978-52.1a13.289 13.289 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257c10.287-13.623 20.462-26.634 29.97-40.09a11.952 11.952 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.558 5.558 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433M28 124.5c1.168-5.56 1.89-11.621 3.503-17.292c9.619-34.195 48.818-48.43 75.785-27.245c15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.864 33.864 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.145 45.145 0 0 1-21.573 32.972a52.263 52.263 0 0 1-60.884-7.784a54.767 54.767 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A860.69 860.69 0 0 1 28 124.5m9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98c-24.02-.334-41.201 17.458-42.258 43.869z"></path>
	</g>
</svg>

{/* NodeJs */}
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
	<g fill="none">
		<rect width={256} height={256} fill="#242938" rx={60}></rect>
		<path fill="#81cd39" d="M119.878 31.116c4.919-2.815 11.325-2.828 16.239 0c24.722 13.97 49.452 27.917 74.17 41.895c4.65 2.619 7.759 7.793 7.712 13.15v84.045c.035 5.579-3.382 10.877-8.287 13.436c-24.641 13.893-49.27 27.802-73.907 41.695c-5.019 2.87-11.554 2.649-16.418-.457c-7.387-4.282-14.787-8.544-22.175-12.822c-1.51-.9-3.212-1.616-4.278-3.08c.943-1.27 2.628-1.428 3.997-1.983c3.083-.981 5.916-2.555 8.748-4.082c.717-.49 1.591-.302 2.278.136c6.317 3.622 12.579 7.35 18.917 10.937c1.352.781 2.721-.256 3.877-.9c24.18-13.667 48.39-27.281 72.567-40.952c.896-.431 1.391-1.382 1.318-2.363c.017-27.725.004-55.454.009-83.18c.102-1.112-.542-2.136-1.549-2.592c-24.555-13.829-49.099-27.678-73.65-41.51a2.557 2.557 0 0 0-2.892-.005c-24.552 13.837-49.09 27.7-73.642 41.527c-1.003.457-1.676 1.464-1.557 2.58c.005 27.726 0 55.455 0 83.184a2.352 2.352 0 0 0 1.336 2.334c6.551 3.715 13.111 7.404 19.667 11.107c3.694 1.987 8.228 3.169 12.298 1.646c3.59-1.288 6.107-4.953 6.039-8.765c.034-27.563-.017-55.13.025-82.69c-.09-1.223 1.071-2.234 2.261-2.118c3.148-.022 6.3-.043 9.448.008c1.314-.03 2.218 1.288 2.056 2.52c-.013 27.738.034 55.476-.021 83.213c.008 7.393-3.029 15.437-9.867 19.054c-8.423 4.363-18.835 3.438-27.157-.746c-7.204-3.596-14.08-7.84-21.156-11.692c-4.918-2.545-8.318-7.864-8.283-13.439V86.161c-.052-5.468 3.182-10.736 7.975-13.317c24.637-13.903 49.27-27.818 73.902-41.728"></path>
		<path fill="#81cd39" d="M141.372 89.335c10.745-.692 22.248-.41 31.917 4.884c7.487 4.056 11.637 12.57 11.769 20.887c-.209 1.121-1.382 1.74-2.453 1.663c-3.117-.004-6.236.043-9.353-.021c-1.323.051-2.091-1.168-2.257-2.337c-.896-3.98-3.067-7.921-6.812-9.841c-5.75-2.878-12.416-2.733-18.686-2.673c-4.577.242-9.499.639-13.377 3.33c-2.977 2.039-3.881 6.155-2.819 9.47c1.002 2.38 3.749 3.148 5.998 3.856c12.949 3.387 26.671 3.049 39.373 7.506c5.259 1.817 10.403 5.35 12.203 10.856c2.355 7.38 1.323 16.2-3.928 22.124c-4.258 4.875-10.459 7.529-16.644 8.97c-8.228 1.835-16.767 1.882-25.123 1.067c-7.857-.896-16.034-2.96-22.099-8.313c-5.187-4.504-7.72-11.522-7.469-18.294c.06-1.144 1.199-1.942 2.295-1.848c3.139-.025 6.279-.034 9.418.005c1.255-.09 2.184.994 2.249 2.176c.578 3.791 2.003 7.771 5.31 10.018c6.38 4.117 14.387 3.835 21.693 3.95c6.053-.268 12.848-.349 17.787-4.35c2.606-2.282 3.378-6.1 2.674-9.384c-.763-2.773-3.664-4.065-6.155-4.91c-12.783-4.043-26.659-2.576-39.318-7.149c-5.14-1.816-10.11-5.25-12.084-10.53c-2.755-7.473-1.493-16.717 4.308-22.44c5.656-5.695 13.82-7.888 21.583-8.672"></path>
	</g>
</svg>

{/* MongoDB */}
<svg xmlns="http://www.w3.org/2000/svg" width="0.47em" height="1em" viewBox="0 0 256 549">
	<path fill="#01ec64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788c-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677m-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223"></path>
</svg>

{/* ReactJs */}
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
	<circle cx={16} cy={15.974} r={2.5} fill="#00d8ff"></circle>
	<path fill="#00d8ff" d="M16 21.706a28.4 28.4 0 0 1-8.88-1.2a11.3 11.3 0 0 1-3.657-1.958A3.54 3.54 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.8 28.8 0 0 1 16 10.293a28.7 28.7 0 0 1 9.022 1.324a11.4 11.4 0 0 1 3.538 1.866A3.4 3.4 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191m0-10.217a28 28 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2c0 .928 1.349 2.387 4.311 3.4A27.2 27.2 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.33 2.33 0 0 0-1.01-1.573a10.2 10.2 0 0 0-3.161-1.654A27.5 27.5 0 0 0 16 11.489"></path>
	<path fill="#00d8ff" d="M10.32 28.443a2.64 2.64 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.8 28.8 0 0 1 3.4-8.593a28.7 28.7 0 0 1 5.653-7.154a11.4 11.4 0 0 1 3.384-2.133a3.4 3.4 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.8 28.8 0 0 1-3.316 8.133a28.4 28.4 0 0 1-5.476 7.093a11.3 11.3 0 0 1-3.523 2.189a4.9 4.9 0 0 1-1.624.307m1.773-14.7a28 28 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114c.8.463 2.742.024 5.1-2.036a27.2 27.2 0 0 0 5.227-6.79a27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.33 2.33 0 0 0-1.868.089A10.2 10.2 0 0 0 17.5 6.9a27.5 27.5 0 0 0-5.4 6.849Z"></path>
	<path fill="#00d8ff" d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.8 28.8 0 0 1-5.747-7.237a28.7 28.7 0 0 1-3.374-8.471a11.4 11.4 0 0 1-.158-4A3.4 3.4 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934a28.4 28.4 0 0 1 3.41 8.287a11.3 11.3 0 0 1 .137 4.146a3.54 3.54 0 0 1-1.494 2.555a2.6 2.6 0 0 1-1.315.324m-9.58-10.2a28 28 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9c.8-.465 1.39-2.363.782-5.434A27.2 27.2 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.33 2.33 0 0 0-.855 1.662a10.2 10.2 0 0 0 .153 3.565a27.5 27.5 0 0 0 3.236 8.1Z"></path>
</svg>

{/* Ruby */}
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
	<path fill="currentColor" fillRule="evenodd" d="M509.815 112.02q-1.103.074-2.2.213h-4.328l-3.406 1.703a36.3 36.3 0 0 0-8.87 4.4l-145.96 73.013l-153.695 153.692l-72.66 145.247a36.3 36.3 0 0 0-4.897 9.863l-1.561 3.122v3.974a36.3 36.3 0 0 0 0 8.302v298.229l6.883 9.508c5.975 8.28 12.713 16.544 20.578 24.41c37.856 37.854 87.664 57.169 142.625 62.015a36.3 36.3 0 0 0 11.566 1.774h575.753c3.14.534 6.337.654 9.508.355a36 36 0 0 0 2.554-.355h29.803V881.54a36.3 36.3 0 0 0 0-11.92V293.88a36.3 36.3 0 0 0-1.774-11.566c-4.848-54.956-24.165-104.757-62.017-142.622h-.071v-.07c-7.85-7.807-16.071-14.49-24.268-20.436l-9.58-6.954h-298.66a36 36 0 0 0-5.322-.213m133.188 72.872h145.96c2.467 2.081 5.248 4.054 7.451 6.245c26.585 26.63 40.964 64.743 42.291 111.188zm-132.691 5.11l65.707 39.38l-25.474 156.104l-64.359 64.357l-100.69 100.687l-156.107 25.473l-39.381-65.705l61.095-122.258L388.05 251.095zm132.762 79.612l123.183 73.937l-138.084 17.242zm178.814 140.21c-21.21 68.248-62.66 142.573-122.402 211.875l-65.85-188.389zm-252.54 59.603l53.645 153.55l-153.553-53.643l68.12-68.119zm269.499 81.032v236.994L738.44 687.05c40.102-43.738 73.727-89.827 100.406-136.59m-478.044 77.697L343.56 766.238l-73.938-123.18zm72.52 5.464l188.322 65.847c-69.283 59.712-143.574 101.195-211.81 122.4zm-248.424 9.366l117.435 195.698c-46.5-1.327-84.636-15.736-111.262-42.361c-2.161-2.162-4.113-4.939-6.173-7.38zm502.169 95.436l100.405 100.404h-237c46.768-26.68 92.86-60.308 136.595-100.404"></path>
</svg>

{/* RubyOnRails */}
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path fill="currentColor" d="M.741 19.365h8.36s-1.598-7.291 3.693-10.243l.134-.066c1.286-.637 4.907-2.431 10.702 1.854c.19-.159.37-.286.37-.286s-5.503-5.492-11.63-4.878c-3.079.275-6.867 3.079-9.09 6.783S.741 19.365.741 19.365m8.804-.783a11 11 0 0 1-.127-1.333l1.143.412c.063.498.159.963.254 1.376zm-7.799-4.317L.529 13.82c-.201.455-.423.984-.529 1.27l1.217.444c.137-.359.36-.878.529-1.269m7.831.296l.857.677q.063-.619.222-1.238l-.762-.603c-.137.391-.233.783-.317 1.164m2.042-2.646l-.508-.762c.191-.243.413-.486.656-.709l.476.72a6 6 0 0 0-.624.751M4.19 8.878l.752.656c-.254.265-.498.551-.72.836l-.815-.698c.244-.265.508-.529.783-.794m9.799 1.027l-.243-.73c.265-.117.571-.233.931-.339l.233.698a7 7 0 0 0-.921.371m3.122-.656l.042-.667c.339.021.688.064 1.048.138l-.042.656a6 6 0 0 0-1.048-.127M8.942 6.392l-.476-.731c-.265.138-.54.286-.826.455l.487.741c.275-.169.54-.328.815-.465m9.217-.053l.042-.709c-.095-.053-.36-.18-1.026-.371l-.043.699c.349.116.688.243 1.027.381M13.238 5.28h.106l-.212-.645q-.492 0-1.016.063l.201.625a9 9 0 0 1 .921-.043"></path>
</svg>

{/* c */}
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path fill="currentColor" d="m15.45 15.97l.42 2.44c-.26.14-.68.27-1.24.39c-.57.13-1.24.2-2.01.2c-2.21-.04-3.87-.7-4.98-1.96c-1.14-1.27-1.68-2.88-1.68-4.83C6 9.9 6.68 8.13 8 6.89C9.28 5.64 10.92 5 12.9 5c.75 0 1.4.07 1.94.19s.94.25 1.2.4l-.6 2.49l-1.04-.34c-.4-.1-.87-.15-1.4-.15c-1.15-.01-2.11.36-2.86 1.1c-.76.73-1.14 1.85-1.18 3.34c.01 1.36.37 2.42 1.08 3.2c.71.77 1.7 1.17 2.99 1.18l1.33-.12c.43-.08.79-.19 1.09-.32"></path>
</svg>

{/* java */}

<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
	<path fill="#0074bd" d="M52.581 67.817s-3.284 1.911 2.341 2.557c6.814.778 10.297.666 17.805-.753c0 0 1.979 1.237 4.735 2.309c-16.836 7.213-38.104-.418-24.881-4.113m-2.059-9.415s-3.684 2.729 1.945 3.311c7.28.751 13.027.813 22.979-1.103c0 0 1.373 1.396 3.536 2.157c-20.352 5.954-43.021.469-28.46-4.365"></path>
	<path fill="#ea2d2e" d="M67.865 42.431c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.519-6.349-7.982-9.502 10.771-20.378c.001 0-29.438 7.35-15.379 23.552"></path>
	<path fill="#0074bd" d="M90.132 74.781s2.432 2.005-2.678 3.555c-9.716 2.943-40.444 3.831-48.979.117c-3.066-1.335 2.687-3.187 4.496-3.576c1.887-.409 2.965-.334 2.965-.334c-3.412-2.403-22.055 4.719-9.469 6.762c34.324 5.563 62.567-2.506 53.665-6.524m-35.97-26.134s-15.629 3.713-5.534 5.063c4.264.57 12.758.439 20.676-.225c6.469-.543 12.961-1.704 12.961-1.704s-2.279.978-3.93 2.104c-15.874 4.175-46.533 2.23-37.706-2.038c7.463-3.611 13.533-3.2 13.533-3.2M82.2 64.317c16.135-8.382 8.674-16.438 3.467-15.353c-1.273.266-1.845.496-1.845.496s.475-.744 1.378-1.063c10.302-3.62 18.223 10.681-3.322 16.345c0 0 .247-.224.322-.425"></path>
	<path fill="#ea2d2e" d="M72.474 1.313s8.935 8.939-8.476 22.682c-13.962 11.027-3.184 17.313-.006 24.498c-8.15-7.354-14.128-13.828-10.118-19.852c5.889-8.842 22.204-13.131 18.6-27.328"></path>
	<path fill="#0074bd" d="M55.749 87.039c15.484.99 39.269-.551 39.832-7.878c0 0-1.082 2.777-12.799 4.981c-13.218 2.488-29.523 2.199-39.191.603c0 0 1.98 1.64 12.158 2.294"></path>
	<path fill="#ea2d2e" d="M94.866 100.181h-.472v-.264h1.27v.264h-.47v1.317h-.329zm2.535.066h-.006l-.468 1.251h-.216l-.465-1.251h-.005v1.251h-.312v-1.581h.457l.431 1.119l.432-1.119h.454v1.581h-.302zm-44.19 14.79c-1.46 1.266-3.004 1.978-4.391 1.978c-1.974 0-3.045-1.186-3.045-3.085c0-2.055 1.146-3.56 5.738-3.56h1.697zm4.031 4.548v-14.077c0-3.599-2.053-5.973-6.997-5.973c-2.886 0-5.416.714-7.473 1.622l.592 2.493c1.62-.595 3.715-1.147 5.771-1.147c2.85 0 4.075 1.147 4.075 3.521v1.779h-1.424c-6.921 0-10.044 2.685-10.044 6.723c0 3.479 2.058 5.456 5.933 5.456c2.49 0 4.351-1.028 6.088-2.533l.316 2.137h3.163zm13.452 0h-5.027l-6.051-19.689h4.391l3.756 12.099l.835 3.635c1.896-5.258 3.24-10.596 3.912-15.733h4.271c-1.143 6.481-3.203 13.598-6.087 19.688m19.288-4.548c-1.465 1.266-3.01 1.978-4.392 1.978c-1.976 0-3.046-1.186-3.046-3.085c0-2.055 1.149-3.56 5.736-3.56h1.701v4.667zm4.033 4.548v-14.077c0-3.599-2.059-5.973-6.999-5.973c-2.889 0-5.418.714-7.475 1.622l.593 2.493c1.62-.595 3.718-1.147 5.774-1.147c2.846 0 4.074 1.147 4.074 3.521v1.779h-1.424c-6.923 0-10.045 2.685-10.045 6.723c0 3.479 2.056 5.456 5.93 5.456c2.491 0 4.349-1.028 6.091-2.533l.318 2.137h3.163zm-56.693 3.346c-1.147 1.679-3.005 3.008-5.037 3.757l-1.989-2.345c1.547-.794 2.872-2.075 3.489-3.269c.532-1.063.753-2.43.753-5.701V92.891h4.284v22.173c0 4.375-.348 6.144-1.5 7.867"></path>
</svg>

{/* python */}
<svg xmlns="http://www.w3.org/2000/svg" width="1.01em" height="1em" viewBox="0 0 256 255">
	<defs>
		<linearGradient id="logosPython0" x1="12.959%" x2="79.639%" y1="12.039%" y2="78.201%">
			<stop offset="0%" stopColor="#387eb8"></stop>
			<stop offset="100%" stopColor="#366994"></stop>
		</linearGradient>
		<linearGradient id="logosPython1" x1="19.128%" x2="90.742%" y1="20.579%" y2="88.429%">
			<stop offset="0%" stopColor="#ffe052"></stop>
			<stop offset="100%" stopColor="#ffc331"></stop>
		</linearGradient>
	</defs>
	<path fill="url(#logosPython0)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072M92.802 19.66a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.13"></path>
	<path fill="url(#logosPython1)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897m34.114-19.586a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.131a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13"></path>
</svg>

{/* Svelte */}
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
	<path fill="#ff3e00" d="M110.43 16.936C98.553-.076 75.09-5.118 58.13 5.696l-29.792 19a34.2 34.2 0 0 0-15.48 22.897a25.478 30.64 0 0 0-.572 6.396a36.15 36.15 0 0 0 4.163 16.73A34.4 34.4 0 0 0 11.34 83.5a25.348 30.483 0 0 0 .345 14.412a36.5 36.5 0 0 0 5.9 13.152c11.878 17.01 35.394 22.053 52.3 11.24l29.762-19.001a34.13 34.13 0 0 0 15.438-22.918a35.5 35.5 0 0 0 .572-6.386a36.2 36.2 0 0 0-4.112-16.71a34.4 34.4 0 0 0 5.112-12.77c.369-2.11.557-4.245.562-6.386a36.4 36.4 0 0 0-6.787-21.178z"></path>
	<path fill="#fff" d="M55.219 112.662a28.463 34.23 0 0 1-5.954.76a23.64 23.64 0 0 1-19.435-10.187a21.9 21.9 0 0 1-4.08-12.74a15.658 18.83 0 0 1 .333-3.833a15.425 18.55 0 0 1 .72-2.782l.561-1.708l1.52 1.156a38.7 38.7 0 0 0 11.658 5.834l1.104.333l-.104 1.104v.573a6.63 6.63 0 0 0 1.228 3.854a7.1 7.1 0 0 0 2.538 2.288a8.262 9.936 0 0 0 3.312.837a8.251 9.923 0 0 0 1.79-.229a7.272 8.745 0 0 0 1.833-.802l29.76-19.094a6.26 6.26 0 0 0 2.904-5.302a6.62 6.62 0 0 0-1.26-3.844a7.14 7.14 0 0 0-2.553-2.252a8.313 9.997 0 0 0-3.307-.81a8.246 9.917 0 0 0-1.79.23a6.938 8.344 0 0 0-1.822.801l-11.346 7.25a24.376 29.314 0 0 1-6.048 2.656a23.64 23.64 0 0 1-25.39-9.416a21.94 21.94 0 0 1-4.08-12.74c.002-1.285.114-2.567.333-3.833a20.65 20.65 0 0 1 9.286-13.781l29.792-18.99a21.9 21.9 0 0 1 6.048-2.667a24 24 0 0 1 5.954-.75A23.68 23.68 0 0 1 98.22 24.745a21.94 21.94 0 0 1 4.029 12.75a15.748 18.939 0 0 1-.334 3.844a15.407 18.529 0 0 1-.718 2.781l-.562 1.708l-1.52-1.114a38.4 38.4 0 0 0-11.658-5.834l-1.104-.343l.104-1.105v-.572a6.7 6.7 0 0 0-1.228-3.865a7.1 7.1 0 0 0-2.55-2.25a8.309 9.992 0 0 0-3.3-.813a8.221 9.887 0 0 0-1.77.271a6.819 8.2 0 0 0-1.831.802l-29.793 18.99a5.88 7.071 0 0 0-1.836 1.79a4.75 5.713 0 0 0-.963 2.377a5.037 6.057 0 0 0-.136 1.104a6.62 6.62 0 0 0 1.228 3.844a7.1 7.1 0 0 0 2.549 2.25a8.299 9.98 0 0 0 3.301.812a8.247 9.918 0 0 0 1.79-.23a6.943 8.35 0 0 0 1.833-.801l11.367-7.292a24.218 29.125 0 0 1 6.048-2.656a28.526 34.305 0 0 1 5.954-.76A23.66 23.66 0 0 1 96.566 60.61a21.94 21.94 0 0 1 3.737 16.614a20.6 20.6 0 0 1-9.286 13.781l-29.74 18.99a24.308 29.233 0 0 1-6.057 2.667z"></path>
</svg>

{/* Github */}
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
	<path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
</svg>
    </div>
    </div>
   </>
  )
}

export default Myskills