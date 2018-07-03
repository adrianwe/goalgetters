exports.shouldUpdateScroll = ({ prevRouterProps, pathname }) => {
  if (prevRouterProps && pathname) {
    if ((prevRouterProps.location.pathname.substring(0, 4) === '/tag' || prevRouterProps.location.pathname.substring(0, 12) === '/inspiration') && pathname.substring(0, 4) === '/tag') {
      return false
    }
  }
}