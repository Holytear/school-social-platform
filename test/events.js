const events = [
    {
      title: "Film Gecesi: Dune Part 2",
      date: "2024-03-22",
      time: "19:00 ",
      location: "Konferans Salonu",
      description: "Dune'u izleyerek eğlenceli bir gece geçirmek için bize katılın, Ücretsiz patlamış mısır ve içecek dahil!",
    },
    {
      title: "Bilim Fuarı",
      date: "2024-04-10",
      time: "Tüm Gün",
      location: "IGU Tower",
      description: "Bilimsel yeteneklerinizi sergileyin ve Harika projeleri ve deneyleri görmeye gelin.",
    },
    // Add more event objects here...
  ];
  
  const eventsContainer = document.querySelector('.events-container');
  
  events.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card');
  
    const eventTitle = document.createElement('h3');
    eventTitle.textContent = event.title;
    eventCard.appendChild(eventTitle);
  
    const eventDetails = document.createElement('p');
    eventDetails.textContent = `${event.date} - ${event.time}`;
    eventCard.appendChild(eventDetails);
  
    const eventLocation = document.createElement('p');
    eventLocation.textContent = `Location: ${event.location}`;
    eventCard.appendChild(eventLocation);
  
    const eventDescription = document.createElement('p');
    eventDescription.textContent = event.description;
    eventCard.appendChild(eventDescription);
  
    const eventCardDetails = document.createElement('div');
    eventCardDetails.classList.add('event-card-details');
  
    const eventDateSpan = document.createElement('span');
    eventDateSpan.textContent = new Date(event.date).toLocaleDateString();
    eventCardDetails.appendChild(eventDateSpan);
  
    const eventTimeSpan = document.createElement('span');
    eventTimeSpan.textContent = event.time;
    eventCardDetails.appendChild(eventTimeSpan);
  
    eventCard.appendChild(eventCardDetails);
  
    eventsContainer.appendChild(eventCard);
  });
  