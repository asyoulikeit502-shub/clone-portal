//<![CDATA[

trimGacUaCookies()
trimGaSessionCookies()

function trimGacUaCookies() {
  // Trim the list of gac cookies and only leave the most recent ones. This
  // prevents rejecting the request later on when the cookie size grows larger
  // than nginx buffers.
  let maxCookies = 15
  var gacCookies = []

  let cookies = document.cookie.split('; ')
  for (let i in cookies) {
    let [cookieName, cookieVal] = cookies[i].split('=', 2)
    if (cookieName.startsWith('_gac_UA')) {
      gacCookies.push([cookieName, cookieVal])
    }
  }

  if (gacCookies.length <= maxCookies) {
    return
  }

  gacCookies.sort((a, b) => {
    return (a[1] > b[1] ? -1 : 1)
  })

  for (let i in gacCookies) {
    if (i < maxCookies) continue
    $.removeCookie(gacCookies[i][0], {
      path: '/',
      domain: '.' + window.location.host
    })
  }
}

function trimGaSessionCookies() {
  // Trim the list of ga session cookies and only leave the most recent ones. This
  // prevents rejecting the request later on when the cookie size grows larger
  // than nginx buffers.
  let maxCookies = 15
  var gaCookies = []
  // safelist our GA properties for production and staging
  const KEEPLIST = ['_ga_ZKBVC1X78F', '_ga_9Z72VQCKY0']

  let cookies = document.cookie.split('; ')
  for (let i in cookies) {
    let [cookieName, cookieVal] = cookies[i].split('=', 2)

    // explicitly ensure the cookie starts with `_ga_` so that we don't accidentally include
    // the `_ga` cookie
    if (cookieName.startsWith('_ga_')) {
      if (KEEPLIST.includes(cookieName)) {
        continue
      }

      gaCookies.push([cookieName, cookieVal])
    }
  }

  if (gaCookies.length <= maxCookies) {
    return
  }

  gaCookies.sort((a, b) => {
    return (a[1] > b[1] ? -1 : 1)
  })

  for (let i in gaCookies) {
    if (i < maxCookies) continue
    $.removeCookie(gaCookies[i][0], {
      path: '/',
      domain: '.' + window.location.host
    })
  }
}

//]]>