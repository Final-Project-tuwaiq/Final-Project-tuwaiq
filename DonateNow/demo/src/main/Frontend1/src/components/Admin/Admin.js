import { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { logout } from "../../reducers/Login/action";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      fontSize: 20,
      background: "#365B6D",
      color: "#FFFFFF",
    },
  },
  row: {
    "& > *": {
      fontSize: 18,
    },
  },
});
const useStyles1 = makeStyles({
  header: {
    background: "#ecece7",
  },

  tabs: {
    color: "#0c0c0b",
    marginRight: 20,
    textDecoration: "none",
    fontSize: 20,
  },
});

function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState();
  const classes = useStyles();
  const classe = useStyles1();
  const state = useSelector((state) => {
    return {
      isLoggedIn: state.usersReducer.isLoggedIn,
      UserType: state.usersReducer.UserType,
    };
  });

  useEffect(() => {
    add();
  }, []);

  const add = () => {
    axios
      .get("http://localhost:8081/charities")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  // const config = {
  //   headers: { Authorization: `Bearer ${state.token}` },
  // };
  const deleteCharity = (id) => {
    axios
      .delete(`http://localhost:8081/charities/${id}`)
      .then(() => {
        console.log("deeeleeete");
        add();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <AppBar position="static" className={classe.header}>
        <Toolbar>
          <NavLink
            className={classe.tabs}
            to="/"
            onClick={() => {
              const action = logout();
              localStorage.removeItem("currentUser");
              localStorage.removeItem("token");
              localStorage.removeItem("isLoggedIn");
              localStorage.removeItem("UserType");
              dispatch(action);
            }}
          >
            {" "}
            <ExitToAppIcon className="icon-logout-admin" />
          </NavLink>
          <NavLink className={classe.tabs} to="add" exact>
            Add Charity
          </NavLink>
        </Toolbar>
      </AppBar>

      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Type of donation accepted</TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>

        {data !== undefined
          ? data.map((e) => {
              return (
                <>
                  <TableBody>
                    <TableRow>
                      <TableCell>{e.id}</TableCell>
                      <TableCell>{e.name}</TableCell>
                      <TableCell>{e.phoneNumber}</TableCell>
                      <TableCell>{e.location}</TableCell>
                      <TableCell>
                        {e.departments.map((department) => {
                          return (
                            <>
                              {department.name}
                              <br></br>
                            </>
                          );
                        })}
                      </TableCell>

                      <TableCell>
                        <Button
                          color="primary"
                          variant="contained"
                          style={{ marginRight: 5 }}
                          onClick={() => {
                            navigate(`/edit/${e.id}`);
                          }}
                        >
                          <EditIcon />
                        </Button>
                        <Button
                          color="secondary"
                          variant="contained"
                          onClick={() => {
                            deleteCharity(e.id);
                          }}
                        >
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </>
              );
            })
          : "Wait"}
      </Table>
    </>
  );
}

export default Admin;
