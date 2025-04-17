function loadWall() {
    const tag = document.getElementById('tag').value.trim() || 'cat';
  
    
    const flickrURL = `https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=${encodeURIComponent(tag)}`;
  

    const proxy = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(flickrURL);
  
    fetch(proxy)
      .then(res => res.json())
      .then(showPhotos)
      .catch(err => console.error('讀取失敗：', err));
  }
  
  function showPhotos(feed) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
  
    (feed.items || []).slice(0, 9).forEach(item => {
      const img = document.createElement('img');
      img.src = item.media.m.replace('_m.', '_z.'); 
      img.alt = item.title;
      gallery.appendChild(img);
    });
  }
  
  loadWall();