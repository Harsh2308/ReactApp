import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { apicalls } from "../api/Api";
import DialogBox from "./DialogBox";
import { MenuItem, TextField } from "@mui/material";

const filterList = [
  {
    value: "Username",
    label: "Username",
  },
  {
    value: "Email",
    label: "Email",
  },
  {
    value: "Phone",
    label: "Phone",
  },
];
export default function Product() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(" ");
  const [search, setNewSearch] = useState("");

  useEffect(() => {
    apicalls.Api().then((res) => {
      setData(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearch = (e) => {
    apicalls.Api().then((res) => {
      setData(res.data);
    });
    setNewSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (filter === "Username") {
      let strr1 = search.charAt(0).toUpperCase() + search.substring(1);
      let fileteredlist = data.filter((item) => {
        return item.username.includes(strr1);
      });
      setData(fileteredlist);
    } else if (filter === "Email") {
      let strr1 = search.charAt(0).toUpperCase() + search.substring(1);
      let fileteredlist = data.filter((item) => {
        return item.email.includes(strr1);
      });
      setData(fileteredlist);
    } else if (filter === "Phone") {
      let fileteredlist = data.filter((item) => {
        let strr1 = search.charAt(0).toUpperCase() + search.substring(1);
        return item.phone.includes(strr1);
      });
      setData(fileteredlist);
    }
  };

  const user = () =>
    data.map((item) => (
      <div key={item.id}>
        <Box sx={{ minWidth: 275 }}>
          <Card>
            <React.Fragment>
              <CardContent variant="outlined">
                <Typography color="text.secondary" gutterBottom>
                  Username: {item.username}
                </Typography>
                <Typography variant="h5">Email id: {item.email}</Typography>
                <Typography sx={{ mb: 1.5 }}>
                  Mobile No. {item.phone}
                </Typography>
                <Typography variant="body2">Website: {item.website}</Typography>
                <Typography variant="body2">
                  Address:{" "}
                  {item.address.street +
                    " " +
                    item.address.city +
                    " " +
                    item.address.zipcode}{" "}
                </Typography>
              </CardContent>
              <CardActions>
                <DialogBox item={item} />
              </CardActions>
            </React.Fragment>
          </Card>
        </Box>
      </div>
    ));

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            id="outlined-select-filter"
            select
            label="Select"
            value={filter}
            onChange={handleChange}
          >
            {filterList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {filter === "Username" && (
            <TextField
              value={search}
              onChange={handleSearch}
              label="Username"
            ></TextField>
          )}
          {filter === "Email" && (
            <TextField
              value={search}
              onChange={handleSearch}
              label="Email"
            ></TextField>
          )}
          {filter === "Phone" && (
            <TextField
              value={search}
              onChange={handleSearch}
              label="Phone"
            ></TextField>
          )}
          <button
              type="submit"
              style={{
                width: "14.50rem",
                height: "3.5rem",
                fontSize: "25px",
                borderRadius: "20px",
                marginTop: "8px",
              }}
            >
              Search
            </button>
        </div>
      </Box>
      {user()}
    </div>
  );
}
