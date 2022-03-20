import { Route, Switch } from "react-router-dom";
import { ABOUT, ACTIVITIES_WEB_DETAILS, CONTACT, CONTRIBUTE, HOME, NEWS_WEB, NEWS_WEB_DETAILS, REGISTER, SCHOOL_CAMPAIGN, THANKS, TOYS_CAMPAIGN } from "./routes";
import SchoolCampaign from "../../Campaigns/School/SchoolCampaign";
import ToysCampaign from "../../Campaigns/Toys/ToysCampaign";
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
import AuthenticatedUserPath from "./AuthenticatedUserPath";
import RegisterForm from "../../Components/Auth/RegisterForm";

const PublicWebRoutes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={SCHOOL_CAMPAIGN} component={SchoolCampaign} />
        <Route exact path={TOYS_CAMPAIGN} component={ToysCampaign} />
        {/* <Route exact path={TESTIMONIALS_WEB} component={<Testimonials />} /> //No existe el componente todavía */}
        <Route exact path={ACTIVITIES_WEB_DETAILS} component={ActivityDetail} />
        {/* <Route exact path={ACTIVITIES_WEB} component={Activities} /> //No existe el componente todavía */}
        <Route exact path={NEWS_WEB_DETAILS} component={NewsDetail} />
        <Route exact path={NEWS_WEB} component={News} />
        <Route exact path={THANKS} component={Gracias} />
        <Route exact path={CONTRIBUTE} component={Donacion} />
        <Route exact path={CONTACT} component={Contact} />
        <Route exact path={ABOUT} component={AboutUs} />
        <AuthenticatedUserPath path={REGISTER} component={RegisterForm} />
        <Route exact path={HOME} component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Layout>
  )
};

export default PublicWebRoutes;