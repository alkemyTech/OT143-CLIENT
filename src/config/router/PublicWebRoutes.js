import { Route, Switch } from "react-router-dom";
import { ABOUT, ACTIVITIES_WEB_DETAILS, CONTACT, HOME, NEWS_WEB, NEWS_WEB_DETAILS, SCHOOL_CAMPAIGN, TOYS_CAMPAIGN } from "./routes";
import SchoolCampaign from "../../Campaigns/School/SchoolCampaign";
import ToysCampaign from "../../Campaigns/Toys/ToysCampaign";
import ActivityDetail from "../../Components/Activities/Detail/Detail";
import NewsDetail from "../../Components/News/Detail/NewsDetail";
import News from "../../Components/News/News";
import Contact from "../../Components/Contact/Contact";
import AboutUs from "../../Components/About/AboutUs";
import Home from "../../Components/Home/Home";
import PageNotFound from "../../Components/PageNotFound";

const PublicWebRoutes = () => {
  return (
    <Switch>
      <Route exact path={SCHOOL_CAMPAIGN} component={SchoolCampaign} />
      <Route exact path={TOYS_CAMPAIGN} component={ToysCampaign} />
      {/* <Route exact path={TESTIMONIALS_WEB} component={<Testimonials />} /> //No existe el componente todavía */}
      <Route exact path={ACTIVITIES_WEB_DETAILS} component={ActivityDetail} />
      {/* <Route exact path={ACTIVITIES_WEB} component={Activities} /> //No existe el componente todavía */}
      <Route exact path={NEWS_WEB_DETAILS} component={NewsDetail} />
      <Route exact path={NEWS_WEB} component={News} />
      {/* <Route exact path={THANKS} component={<Thanks />} /> //No existe el componente todavía */}
      {/* <Route exact path={CONTRIBUTE} component={<Contribute />} /> //No existe el componente todavía */}
      <Route exact path={CONTACT} component={Contact} />
      <Route exact path={ABOUT} component={AboutUs} />
      <Route exact path={HOME} component={Home} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  )
};

export default PublicWebRoutes;