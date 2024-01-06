

Hooks.on(`ready`, () => {
    console.log("SWADE Extras | Ready");

    game.swadeextras = {};
    game.swadeextras.path = "modules/swade-extras";

    const  templatePaths = [
        game.swadeextras.path + "/templates/dramatic-task.hbs",
    ]

    loadTemplates(templatePaths).then(() => {
        console.log("SWADE Extras templates preloaded");
      });

});


Hooks.on("renderChatMessage", (message, html) => {

});
