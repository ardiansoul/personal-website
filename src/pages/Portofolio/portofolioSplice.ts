import axios from "axios";

export const getTitle = (text: string) => {
  return text;
};

export const getDatas = () => {
  try {
    setTimeout(() => {
      console.log("load data");
    }, 1000);
    // throw "error";
    return {
      datas: [
        {
          id: "12490",
          image:
            "https://images.unsplash.com/photo-1628965441893-267a05e29520?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          title: "Whatapp",
          stacks: ["ReactJs", "NodeJs", "MySQL"],
          description: "test data dulu dah",
          role: "Fullstack Developer",
        },
        {
          id: "10423",
          image:
            "https://images.unsplash.com/photo-1628965441893-267a05e29520?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          title: "Whatapp",
          stacks: ["ReactJs", "NodeJs", "MySQL"],
          description: "test data dulu dah",
          role: "Fullstack Developer",
        },
        {
          id: "12423",
          image:
            "https://images.unsplash.com/photo-1628965441893-267a05e29520?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          title: "Whatapp",
          stacks: ["ReactJs", "NodeJs", "MySQL"],
          description: "test data dulu dah",
          role: "Fullstack Developer",
        },
        {
          id: "12473",
          image:
            "https://images.unsplash.com/photo-1628965441893-267a05e29520?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          title: "Whatapp",
          stacks: ["ReactJs", "NodeJs", "MySQL"],
          description: "test data dulu dah",
          role: "Fullstack Developer",
        },
        {
          id: "12303",
          image:
            "https://images.unsplash.com/photo-1628965441893-267a05e29520?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          title: "Whatapp",
          stacks: ["ReactJs", "NodeJs", "MySQL"],
          description: "test data dulu dah",
          role: "Fullstack Developer",
        },
        {
          id: "05423",
          image:
            "https://images.unsplash.com/photo-1628965441893-267a05e29520?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          title: "Whatapp",
          stacks: ["ReactJs", "NodeJs", "MySQL"],
          description: "test data dulu dah",
          role: "Fullstack Developer",
        },
        {
          id: "23435",
          image:
            "https://images.unsplash.com/photo-1628965441893-267a05e29520?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          title: "Whatapp",
          stacks: ["ReactJs", "NodeJs", "MySQL"],
          description: "test data dulu dah",
          role: "Fullstack Developer",
        },
        {
          id: "08089",
          image:
            "https://images.unsplash.com/photo-1628965441893-267a05e29520?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          title: "Whatapp",
          stacks: ["ReactJs", "NodeJs", "MySQL"],
          description: "test data dulu dah",
          role: "Fullstack Developer",
        },
      ],
      loading: false,
      error: "",
    };
  } catch (err) {
    console.log(err);
    return {
      datas: [],
      loading: false,
      error: err,
    };
  }
};

export const getData = (id: string) => {
  try {
    return {
      item: {
        id: "08089",
        image: "/assets/images/background.png",
        title: "Whatapp",
        description: "test data dulu dah",
        role: "Fullstack Developer",
        stacks: ["ReactJs", "NodeJs", "MySQL"],
      },
      loading: false,
      error: "",
    };
  } catch (err) {
    return {
      item: {
        id: "",
        image: "",
        title: "",
        stacks: [],
        description: "",
        role: "",
      },
      loading: false,
      error: err,
    };
  }
};
