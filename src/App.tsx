import { useState, useEffect } from "react";
import "./App.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, CardContent, createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import PetsIcon from "@mui/icons-material/Pets";
import Stack from "@mui/material/Stack";

const theme = createTheme({});
const cards = [1, 2, 3, 4, 5, 6];

const App = () => {
  const [cursorXY, setCursorXY] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: { clientX: number; clientY: number }) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;
      setCursorXY({ x, y });
      console.log(x, y);
    };
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div
          className="CursorEffect"
          style={{
            transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
          }}
        ></div>
        <CssBaseline />
        <Box
          sx={{
            p: 7,
          }}
        >
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" color="text.primary">
              Hello, Dorahack!
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Hello, Dorahack recruiters! I am Wu Nan, a current Year 4 student
              from National University of Singapore! Hereby I shall present to
              you an interactive webpages designed by me. Have a nice day!
            </Typography>
          </Container>
        </Box>
        <Container
          sx={{
            p: 8,
          }}
          maxWidth="md"
        >
          <Grid container spacing={5}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <PetsIcon sx={{ alignSelf: "center" }} />
                  <CardContent
                    sx={{ flexGrow: 1, width: "40%", alignSelf: "center" }}
                  >
                    <Typography component="h2" variant="h5">
                      Dorayaki
                    </Typography>
                    <Button variant="outlined">Button Label</Button>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ justifyContent: "center" }}
                    >
                      <Container maxWidth="xs">
                        <Typography component="h3" variant="h6">
                          3.14%
                        </Typography>
                        <Typography gutterBottom>Description</Typography>
                      </Container>
                      <Container maxWidth="xs">
                        <Typography component="h3" variant="h6">
                          2.72%
                        </Typography>
                        <Typography gutterBottom>Description</Typography>
                      </Container>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
