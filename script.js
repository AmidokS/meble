const gallery = document.getElementById("gallery");

for (let i = 1; i <= 20; i++) {
    const link = document.createElement("a");
    link.href = `image/kuchnia${i}.jpg`;
    link.setAttribute("data-lightbox", "meble");
    link.setAttribute("data-title", `Kuchnia ${i}`);

    const img = document.createElement("img");
    img.src = `image/kuchnia${i}.jpg`;
    img.alt = `kuchnia${i}`;

    link.appendChild(img);
    gallery.appendChild(link);
}