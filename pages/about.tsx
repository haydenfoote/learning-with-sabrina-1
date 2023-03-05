import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();

  const reactNotes = [
    {
      id: 1,
      name: "React Hooks",
      description: [
        {
          id: 1,
          name: "useState",
          description:
            "useState controls access to your state variable through setters. if the value is changed the component is going to be rerendered. useState takes any type of values, whether it's string or number or object, or array of objects. It is used to control the inputs by the users, the button actions, ",
        },
        {
          id: 2,
          name: "useEffect",
          description:
            " useEffect is responsible for rerendering the useState values and also for updating Redux. useEffect takes two parametres; a function and a dependency array. Function has functionality that is going to be performed IF the dependency array values changes. it is not recommended to change value of useState while having value of the same useState in dependency array",
        },
      ],
    },
    {
      id: 2,
      name: "Redux",
      description: [
        {
          id: 1,
          name: "useSelector",
          description:
            "useSelector is used for getting the values from the initialState of Redux. When Typescript is in use, we use useAppSelector. To access the stuff from Redux, we have a function inside useAppSelector which takes state as parameter, and returns anything from state of Redux",
        },
        {
          id: 2,
          name: "useDispatch",
          description:
            "useDispatch is used to provide access to the reducers, which modify the value of the state. When using TypeScript, we use useAppDispatch. we need to initialize it first, then pass any reducer from the slice of the store as a parameter of dispatch",
        },
        {
          id: 3,
          name: "Reducers",
          description:
            "Reducers are functions that take the current state and then perform an action to modify the state; and return a new state. They exist only in the scope of slice of store, and cannot be accessed without the help of useDispatch",
        },
      ],
    },
    {
      id: 3,
      name: "MUI",
      description:
        "MUI is a UI library, it is also referred as 'CSS in JS', and all the styling as passed as a prop to corresponding component of MUI, user can use only the components that exist inside a library and cannot use made up components.",
    },
    {
      id: 4,
      name: "TypeScript",
      description:
        "TypeScript is a superset of JS which contains addition of the types that doesn't exist in JS. Enforcement of type declaration so that errors can be understood before compiling time.",
    },
  ];

  const handleGoBack = () => router.push("/");

  return (
    <Box>
      <Box display="flex" width="100%">
        <Button onClick={handleGoBack}>Go Back</Button>
        <Box display="flex" width="100%" justifyContent="center">
          <Typography variant="h2" marginLeft={10}>
            React Notes
          </Typography>
        </Box>
      </Box>
      <Box display="flex" gap="20px" flexWrap="wrap" padding="0 70px">
        {reactNotes.map((eachItem) => (
          <Box
            bgcolor="#ECF2FF"
            key={eachItem.id}
            height="fit-content"
            sx={{
              border: "2px solid grey",
              borderRadius: "15px",
              "&:hover": { boxShadow: "0px 0px 15px #d9d9d9" },
            }}
            padding="10px"
            width={
              Array.isArray(eachItem.description) ? "fit-content" : "250px"
            }
          >
            <Typography variant="h5" fontWeight="600">
              {eachItem.name}
            </Typography>
            {Array.isArray(eachItem.description) ? (
              <Box display="flex" gap="10px" flexWrap="wrap">
                {eachItem.description.map((desc) => (
                  <Box key={desc.id}>
                    <hr />
                    <Typography color="#060047">{desc.name}</Typography>
                    <hr />
                    <Typography width="250px">{desc.description}</Typography>
                  </Box>
                ))}
              </Box>
            ) : (
              <Typography>{eachItem.description}</Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default About;
