export function CalculatorMovingModule(
  moveEl: HTMLDivElement,
  targetEl: HTMLDivElement,
): void {
  let mousedown = false;
  let x = 0;
  let y = 0;

  const move = (e: MouseEvent): void => {
    if (mousedown) {
      moveEl.style.left = e.clientX + x + 'px';
      moveEl.style.top = e.clientY + y + 'px';
    }

    requestAnimationFrame(move as unknown as FrameRequestCallback);
  };

  const getPosition = (e: MouseEvent) => {
    targetEl.style.cursor = 'move';
    mousedown = true;

    x = moveEl.offsetLeft - e.clientX;
    y = moveEl.offsetTop - e.clientY;

    e.preventDefault();

    requestAnimationFrame(move as unknown as FrameRequestCallback);
  };

  const stopMove = () => {
    targetEl.style.cursor = 'auto';
    mousedown = false;
  };

  targetEl.addEventListener('mousedown', getPosition);
  targetEl.addEventListener('mouseup', stopMove);
  moveEl.addEventListener('mousemove', move);
}
