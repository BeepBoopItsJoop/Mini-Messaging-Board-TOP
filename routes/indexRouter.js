import Router from "express";

const indexRouter = Router();

const messages = [
     {
          text: "Hi there!",
          user: "Amando",
          added: new Date()
     },
     {
          text: "Hello World!",
          user: "Charles",
          added: new Date()
     }
];

indexRouter.get("/", (req, res) => {
     res.render("index", { messages: messages });
});
indexRouter.post("/new", (req, res) => {
     // TODO: dont trust user input
     messages.push({ text: req.body.messageText, user: req.body.messageName, added: new Date() });
     res.redirect("/") 

});

export default indexRouter
