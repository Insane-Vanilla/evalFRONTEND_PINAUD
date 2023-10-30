//JQUERY

$(document).ready(function () {
  //Créer un tableau filtre
  const filters = [];

  //Créer fonction qui insère la catégorie cochée dans le tableau
  $("input").on("click", function () {
    const name = $(this).attr("name");
    if ($(this).is(":checked", true)) {
      filters.push("." + name);
    } else {
      // si case non cochée, supprime l'élément du tableau
      filters.splice(filters.indexOf("." + name), 1);
    }

    // Jouer display
    display();
  });

  // Créer fonction qui montre la catégorie dont la case est cochée
  const display = () => {
    // si au moins 1 élément est présent au tableau
    if (filters.length > 0) {
      // cacher les images de la galerie
      $(".galerie img").hide();
      // mais montrer les images sélectionnées
      $(filters.join(", ")).show();
    } else {
      // si aucune case cochée, tout montrer
      $(".galerie img").show();
    }
  };
});
