Static html & css page set, sprinkling of js.

I don't bother with grunt for something this simple, but there is a 
grunt file. mmv. It's already compiled so less.js / grunt isn't at all
necessary.

I use the included less.js because it's faster than grunt, to use simply
append "#!watch" to the end of the url and then refresh. For this to
work you need to be either on localhost, a browser without file:// 
protection, or to use --disable-web-security on Chrome/Chromium/Opera.