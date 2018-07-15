export function classifyDevice(x, y) {
  const minSize = Math.min(x, y);

  const device = {
    x: x,
    y: y,
    ratio: x / y,
    portrait: x < y,
    phone: false,
    tablet: false,
    desktop: false,
    bigDesktop: false
  };

  if (minSize <= 600)
    device.phone = true;
  else if (minSize <= 1200)
    device.tablet = true;
  else if (minSize <= 1800)
    device.desktop = true;
  else
    device.bigDesktop = true;

  return device;
}

export function simpleButton(button, cb) {
  button.addEventListener("mouseup", cb);

  function touchend(e) {
    e.preventDefault();
    cb();
    button.removeEventListener("touchend", touchend);
  }

  button.addEventListener("touchstart", function(e) {
    e.preventDefault();
    button.addEventListener("touchend", touchend);
  });

	return cb;
}

export function stackButton(hideFn, showFn, button, cb) {
  const iconArr = button.getElementsByTagName("*");
	
  function changeStack(state) {
    for (let i = 0; i < iconArr.length; i++) {
      let icon = iconArr[i];
      if (i === state)
				showFn(icon);
      else 
        hideFn(icon);
    }
  };

  changeStack(0);

  button.addEventListener("mouseup", function() {
    changeStack(cb());
  });

  function touchend(e) {
    e.preventDefault();
    changeStack(cb());
    button.removeEventListener("touchend", touchend);
  }

  button.addEventListener("touchstart", function(e) {
    e.preventDefault();
    button.addEventListener("touchend", touchend);
  });

	return () => changeStack(cb());
}
