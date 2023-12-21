for (let i = 0; i < 24; i++) {
    let yeniDiv = document.createElement('div');
    let yeniImg = document.createElement('img');
    yeniImg.src = 'https://source.unsplash.com/random/300x300?' + i;
    yeniDiv.appendChild(yeniImg);
    document.body.appendChild(yeniDiv);
    console.log((i+1) + ". resim olusturuldu.")
}