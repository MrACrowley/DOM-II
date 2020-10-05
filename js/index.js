

const boatImg =
document.querySelector('.img-fluid rounded');
console.log('boatImg:', boatImg);

boatImg.addEventListener("mouseenter", () => {
      boatImg.style.transform = "scale(3.5)";
      boatImg.style.transition = "transform 1s";
    });

    boatImg.addEventListener("mouseleave", ()=> {
        boatImg.style.transform = "scale(1)";
        boatImg.style.transition = "transform 1s";
    });

    document.querySelectorAll('.text-content').forEach(title => {
          title.addEventListener("click", (e) => {
            console.log(e);
            title.style.color = 'red';
          });
        });

        document.addEventListener("keydown", (e) => {
            console.log('keydown: ', e);
            if (e.key === 'd') {
              console.log('hit d!');
            } else {
              console.log(`hit ${e.key}`);
            }
          });

          window.addEventListener('scroll', () => {
            body.style.backgroundColor = 'purple';
          });

          const imgfluid = document.querySelector('.img-fluid rounded');
          imgfluid.addEventListener('dblclick', () => {
            logo.src = 'https://images.pexels.com/photos/3596688/pexels-photo-3596688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
            });

            window.addEventListener('resize', () => {
                busInTheSand.src = 'img/fun-bus.jpg';
                 });

              const link = document.querySelector('.menu-item');
                link.addEventListener("click", (e) => {
                  console.log('click: ', e);
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('clicked the link!');
                    });