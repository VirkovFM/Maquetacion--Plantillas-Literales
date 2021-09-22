$(document).ready(function () {
  $(function () {
    $(".bxslider").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 1200,
    });
  });

  // Posts
  var posts = [
    {
      title: "Título 1",
      date:
        "Publicado el día " +
        moment().format("DD") +
        " de " +
        moment().format("MMMM") +
        " del " +
        moment().format("YYYY"),
      content:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu dapibus nulla. Donec id lorem et nunc luctus elementum. Vivamus porttitor sem eget massa iaculis, sed mattis metus bibendum. Praesent eu ipsum a massa blandit venenatis ut in purus. Sed ut nibh sed massa facilisis mollis tempus sagittis ligula. Maecenas id mollis augue, eu vulputate ligula. Cras felis est, cursus sit amet quam a, consequat ultricies urna. Suspendisse vel vulputate massa, eu condimentum turpis. Curabitur posuere ex eros, nec interdum quam eleifend eu. Morbi ullamcorper sodales ex, a rhoncus justo. Suspendisse tristique justo imperdiet dictum maximus. Vestibulum non feugiat enim. In finibus bibendum velit, a consectetur felis sagittis ullamcorper. Aenean tristique turpis et sem bibendum, suscipit semper turpis consectetur. Donec condimentum euismod libero sit amet scelerisque. Nunc lobortis, nisi vel iaculis malesuada, dolor eros condimentum ipsum, vel placerat lorem tortor sed ipsum.",
    },
    {
      title: "Título 2",
      date:
        "Publicado el día " +
        moment().format("DD") +
        " de " +
        moment().format("MMMM") +
        " del " +
        moment().format("YYYY"),
      content:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu dapibus nulla. Donec id lorem et nunc luctus elementum. Vivamus porttitor sem eget massa iaculis, sed mattis metus bibendum. Praesent eu ipsum a massa blandit venenatis ut in purus. Sed ut nibh sed massa facilisis mollis tempus sagittis ligula. Maecenas id mollis augue, eu vulputate ligula. Cras felis est, cursus sit amet quam a, consequat ultricies urna. Suspendisse vel vulputate massa, eu condimentum turpis. Curabitur posuere ex eros, nec interdum quam eleifend eu. Morbi ullamcorper sodales ex, a rhoncus justo. Suspendisse tristique justo imperdiet dictum maximus. Vestibulum non feugiat enim. In finibus bibendum velit, a consectetur felis sagittis ullamcorper. Aenean tristique turpis et sem bibendum, suscipit semper turpis consectetur. Donec condimentum euismod libero sit amet scelerisque. Nunc lobortis, nisi vel iaculis malesuada, dolor eros condimentum ipsum, vel placerat lorem tortor sed ipsum.",
    },
  ];
  console.log(posts);
  // Recorrer el JSON para enviar al index.HTML
  posts.forEach((item) => {
    var post = `<article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="button-more">Artículo completo</a>
                </article>`;
    //console.log(post);
    $("#posts").append(post);
  });
});