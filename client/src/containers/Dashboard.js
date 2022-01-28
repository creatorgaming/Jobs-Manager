// mui imports
import {
    styled,
    createTheme,
    ThemeProvider,
    CssBaseline,
    MuiDrawer,
    Box,
    Toolbar,
    List,
    Divider,
    IconButton,
    Container,
    Grid,
    Paper,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

// other imports
import { useState } from "react";
import { useOutletContext } from "react-router";

// custom components and helpers import
import Copyright from "../components/Copyright";
import { mainListItems, secondaryListItems } from "../helpers/listItems";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        }),
    },
}));

const mdTheme = createTheme();

function DashboardContent() {
    const [open, setOpen] = useState(true);
    const [signedIn] = useOutletContext();

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            {!signedIn ? (
                ""
            ) : (
                <ThemeProvider theme={mdTheme}>
                    <Box sx={{ display: "flex" }}>
                        <CssBaseline />
                        <Drawer variant="permanent" open={open}>
                            <Toolbar
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    px: [1],
                                }}
                            >
                                <IconButton onClick={toggleDrawer}>
                                    <ChevronLeftIcon />
                                </IconButton>
                            </Toolbar>
                            <Divider />
                            <List>{mainListItems}</List>
                            <Divider />
                            <List>{secondaryListItems}</List>
                        </Drawer>
                        <Box
                            component="main"
                            sx={{
                                backgroundColor: (theme) =>
                                    theme.palette.mode === "light"
                                        ? theme.palette.grey[100]
                                        : theme.palette.grey[900],
                                flexGrow: 1,
                                height: "100vh",
                                overflow: "auto",
                            }}
                        >
                            <Toolbar />
                            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                                <Grid container spacing={3}>
                                    {/* Chart */}
                                    <Grid item xs={12} md={8} lg={9}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                display: "flex",
                                                flexDirection: "column",
                                                height: 240,
                                            }}
                                        >
                                            COMPONENT - 1
                                        </Paper>
                                    </Grid>
                                    {/* Recent Deposits */}
                                    <Grid item xs={12} md={4} lg={3}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                display: "flex",
                                                flexDirection: "column",
                                                height: 240,
                                            }}
                                        >
                                            COMPONENT - 2
                                        </Paper>
                                    </Grid>
                                    {/* Recent Orders */}
                                    <Grid item xs={12}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            COMPONENT - 3
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <Copyright sx={{ pt: 4 }} />
                            </Container>
                        </Box>
                    </Box>
                </ThemeProvider>
            )}
        </>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}
