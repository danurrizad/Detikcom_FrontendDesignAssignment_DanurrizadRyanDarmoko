// GROUP BUTTON
document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.querySelectorAll('.btn-check');
    radioButtons.forEach(radioButton => {
      radioButton.addEventListener('change', function () {
        updateInfoContainers();
      });
    });

    // infoContainer Photo or Video
    function updateInfoContainers() {
      const infoContainers = document.querySelectorAll('.info-container');
      infoContainers.forEach(infoContainer => {
        infoContainer.innerHTML = ''; 
        infoContainer.style.backgroundColor = 'transparent';

        if (document.getElementById('btnradio2').checked) { 
          const photoInfo = document.createElement('div');
          photoInfo.textContent = '5 Foto'; 

          const cameraIcon = document.createElement('i');
          cameraIcon.classList.add('bi', 'bi-camera-fill');

          infoContainer.appendChild(cameraIcon);
          infoContainer.appendChild(photoInfo);
          infoContainer.style.backgroundColor = 'rgba(33, 36, 39, 0.5)';
        } else if (document.getElementById('btnradio3').checked) { 
          const videoInfo = document.createElement('div');
          videoInfo.textContent = '01:45'; 

          const videoIcon = document.createElement('i');
          videoIcon.classList.add('bi', 'bi-play-circle-fill');
          infoContainer.appendChild(videoIcon);
          infoContainer.appendChild(videoInfo);
          infoContainer.style.backgroundColor = 'rgba(33, 36, 39, 0.5)';
        }
      });
    }
  });