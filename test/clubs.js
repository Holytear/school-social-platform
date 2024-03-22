const clubs = [
    {
      name: "Yapay Zeka Kulübü",
      description: "Mühendisliğini konuştur ve yarışmalarda rekabet et.",
      image: "yapay.jpeg",
      link: "clubs/robotics.html"
    },
    {
      name: "Robotik Kodlama",
      description: "Kod yazma yeteneğini geliştirebileceğin ve proje yapabileceğin ortam.",
      image: "robot.jpg",
      link: "clubs/debate.html"
    },
    // Add more club objects here...
  ];
  
  const clubContainer = document.querySelector('.clubs-container');
  
  clubs.forEach(club => {
    const clubCard = document.createElement('div');
    clubCard.classList.add('club-card');
  
    const clubImage = document.createElement('img');
    clubImage.src = club.image;
    clubImage.alt = club.name;
    clubCard.appendChild(clubImage);
  
    const clubName = document.createElement('h3');
    clubName.textContent = club.name;
    clubCard.appendChild(clubName);
  
    const clubDescription = document.createElement('p');
    clubDescription.textContent = club.description;
    clubCard.appendChild(clubDescription);
  
    const clubLink = document.createElement('a');
    clubLink.href = club.link;
    clubLink.textContent = "Learn More";
    clubCard.appendChild(clubLink);
  
    clubContainer.appendChild(clubCard);
  });
  