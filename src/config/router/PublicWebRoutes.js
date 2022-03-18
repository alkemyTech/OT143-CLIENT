import { Route, Switch } from "react-router-dom";
import { ABOUT, ACTIVITIES_WEB_DETAILS, CONTACT, CONTRIBUTE, HOME, NEWS_WEB, NEWS_WEB_DETAILS, THANKS } from "./routes";
import ActivityDetail from "../../Components/Activities/Detail/Detail";
import NewsDetail from "../../Components/News/Detail/NewsDetail";
import News from "../../Components/News/News";
import Gracias from "../../Components/Donations/Gracias";
import Donacion from "../../Components/Donations/Donacion";
import Contact from "../../Components/Contact/Contact";
import AboutUs from "../../Components/About/AboutUs";
import Home from "../../Components/Home/Home";
import PageNotFound from "../../Components/PageNotFound";
import Layout from "../../Components/Layout/Layout";

const PublicWebRoutes = () => {
  return (
    <Layout>
      <Switch>
        {/* <Route exact path={TESTIMONIALS_WEB} component={<Testimonials />} /> //No existe el componente todavía */}
        <Route exact path={ACTIVITIES_WEB_DETAILS} component={ActivityDetail} />
        {/* <Route exact path={ACTIVITIES_WEB} component={Activities} /> //No existe el componente todavía */}
        <Route exact path={NEWS_WEB_DETAILS} component={NewsDetail} />
        <Route exact path={NEWS_WEB} component={News} />
        <Route exact path={THANKS} component={Gracias} />
        <Route exact path={CONTRIBUTE} component={Donacion} />
        <Route exact path={CONTACT} component={Contact} />
        <Route exact path={ABOUT} component={AboutUs} />
        <Route exact path={HOME} component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Layout>
  )
};

export default PublicWebRoutes;