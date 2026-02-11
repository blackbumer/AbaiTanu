(() => {
  const scrollWindow = document.getElementById("scrollWindow");
  const scrollTrack = document.getElementById("scrollTrack");
  if (!scrollWindow || !scrollTrack) return;

  const cards = Array.from(scrollTrack.querySelectorAll(".card"));
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const progress = document.getElementById("scrollProgress");
  let index = 0;

  const update = () => {
    const windowHeight = scrollWindow.clientHeight;
    const trackHeight = scrollTrack.scrollHeight;
    const maxOffset = Math.max(0, trackHeight - windowHeight);
    const target = cards[index];
    const desired = Math.min(target.offsetTop, maxOffset);

    scrollTrack.style.transform = `translateY(-${desired}px)`;
    cards.forEach((card, i) => {
      card.classList.toggle("is-active", i === index);
    });
    if (progress) {
      progress.textContent = `${index + 1} / ${cards.length}`;
    }
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === cards.length - 1;
  };

  const expandCard = (card) => {
    cards.forEach((item) => item.classList.remove("is-expanded"));
    card.classList.add("is-expanded");
  };

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      index = Math.max(0, index - 1);
      update();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      index = Math.min(cards.length - 1, index + 1);
      update();
    });
  }

  cards.forEach((card, idx) => {
    card.addEventListener("click", () => {
      index = idx;
      update();
      expandCard(card);
    });
  });

  window.addEventListener("resize", update);
  update();
})();
