

Hooks.on(`ready`, async () => {
    console.log("SWADE Extras | Ready");

    game.swadeextras = {};
    game.swadeextras.path = "modules/swade-extras";

    const  templatePaths = [
        game.swadeextras.path + "/templates/dramatic-task.hbs",
        game.swadeextras.path + "/templates/common-card-header.hbs",
        game.swadeextras.path + "/templates/common-card-footer.hbs",
    ]


    Handlebars.registerHelper('addone', function (num) {
        return num + 1;
    })

    Handlebars.registerHelper("capitalize", function(string) {
        string = string || '';
        return string.slice(0,1).toUpperCase() + string.slice(1);
    });

    loadTemplates(templatePaths).then(() => {
        console.log("SWADE Extras templates preloaded");
      });

      const actor = game.actors.find( (e) => e.id == "sVI2MxeNj3XiH9Lc");
      const actor2 = game.actors.find( (e) => e.id == "06sigoeY2p8S40B5");
      
      const skill = actor.getSingleItemBySwid("notice", "skill");
      const skill2 = actor2.getSingleItemBySwid("notice", "skill");

      const data = {
        task_type : "Dramatic Task",
        task_name : "Disarm Trap in the Dark",
        tn : 4,
        isGM: game.user.isGM,
        rounds : [
            {
                actors : [
                    { 
                        actor : actor,
                        skill : skill,
                        action_card : {
                            name : "Ace of Clubs",
                            img : "cards/light-soft/clubs-ace.webp",
                            modifier : -2,
                        },
                        rolled : true,
                        results : {
                            trait_roll : {
                                total : 5,
                                success : true,
                                raise : false,
                                result : "success",
                            },
                            wild_roll : {
                                total : 3,
                                success : false,
                                raise : false,
                                result : "failure",
                            },
                            modifiers : {
                                action_card : -2,
                            }
                        }
                    },
                    { 
                        actor : actor2,
                        skill : skill2,
                        action_card : {
                            name : "five of Clubs",
                            img : "cards/light-soft/clubs-05.webp",
                            modifier : -2,
                        },
                        rolled : true,
                        results : {
                            trait_roll : {
                                total : 1,
                                success : false,
                                raise : false,
                                result : "failure",
                            },
                            wild_roll : {
                                total : 12,
                                success : true,
                                raise : true,
                                result : "success",
                            },
                            modifiers : {
                                action_card : -2,
                            }
                        }
                    }
                ],
                
            },
            {
                actors : [
                    { 
                        actor : actor,
                        skill : skill,
                        action_card : {
                            name : "Ace of Clubs",
                            img : "cards/light-soft/clubs-ace.webp",
                            modifier : -2,
                        },
                        rolled : false,
                        results : {
                            trait_roll : {
                                total : 5,
                                success : true,
                                raise : false,
                                result : "success",
                            },
                            wild_roll : {
                                total : 3,
                                success : false,
                                raise : false,
                                result : "failure",
                            },
                            modifiers : {
                                action_card : -2,
                            }
                        }
                    }
                ],
                
            },
        ]
      };
      
        renderTemplate(
            game.swadeextras.path + "/templates/dramatic-task.hbs", 
            data
        ).then((content) => {
            content = $(content);
            // Activate selectable control.
            content
              .find(".brsw-player-modifiers>.brws-selectable")
              .click( () => { console.log("TEST"); });
            content
              .find(".brsw-gm-modifiers>.brws-selectable")
              .click( () => { console.log("TEST"); });

              TextEditor.enrichHTML(content, { async: false });

              ChatMessage.create({content: content.html()});
          });
    
          

});




Hooks.on("renderChatMessage", (message, html) => {

});
