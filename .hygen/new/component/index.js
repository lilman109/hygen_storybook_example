module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: "select",
        name: "category",
        message: "Which Atomic Design category?",
        choices: ["atoms", "molecules", "organisms", "pages"],
      },
      {
        type: "confirm",
        name: "server_component",
        message: "Is this component a server component?",
        initial: true,
      },
      {
        type: "input",
        name: "name",
        message: "What name of component do you want to create?",
        validate: (answer) => answer !== "",
      },
      {
        type: "confirm",
        name: "props",
        message: "Are there props?",
        initial: true,
      },
      {
        type: "confirm",
        name: "have_hooks",
        message: "Do you need a hooks file?",
        initial: true,
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { name, category, dir } = answers;
      const path = `src/components/${category}/${name}`;
      const index_path = `src/components/${category}`;
      const export_name = `${name}`;
      return { ...answers, path, index_path, export_name };
    });
  },
};
