const getClientXFromDifferentEvents = event => {
  if (
    event.type.includes('touch') &&
    typeof event?.touches !== 'undefined'
  ) {
    const touchX =
      event.touches[0]?.clientX ??
      event.changedTouches[0]?.clientX;
    if (touchX) return touchX;
  }
  return event.clientX;
};

export default getClientXFromDifferentEvents;
