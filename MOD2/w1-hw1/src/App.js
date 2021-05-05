//import logo from './logo.svg';
import './App.css'
import WebsiteVisitors from './WebsiteVisitors'
import Sidebar from './Sidebar'
import Reviews from './Reviews'
import SentimentAnalysis from './SentimentAnalysis'
import AverageRating from './AverageRating'

function App() {
  return (
    <div className="Dashboard">
      <div className="Sidebar">
      <Sidebar/>
      </div>
      <div className="Reviews">
      <Reviews reviews="1,218"/>
      </div>
      <div className="AverageRating">
      <AverageRating rating="4.6"/>
      </div>
      <div className="SentimentAnalysis">
      <SentimentAnalysis num1="960" num2="122" num3="321"/>
      </div>
      <div className="WebsiteVisitors">
      <WebsiteVisitors visitors="821"/>
      </div>
    </div>  
  );
}

export default App;
