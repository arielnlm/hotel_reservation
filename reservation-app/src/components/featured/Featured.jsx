import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=thimphu,marrakech,cuzco"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://media.discordapp.net/attachments/1074086498850320384/1147242553603784824/arielnlm_city_Thimphu_ui_ux_ui_ux_website_pastel_colors_89cf76d9-67ab-40d9-ab44-b3c32ecb7e4d.png?width=1194&height=1194"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Thimphu</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://media.discordapp.net/attachments/1074086498850320384/1147242190406439042/arielnlm_city_Marrakech_ui_ux_ui_ux_website_pastel_colors_3e963340-5afc-4250-bccf-40294c401767.png?width=1194&height=1194"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Marrakech</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://media.discordapp.net/attachments/1074086498850320384/1147242235843334224/arielnlm_city_Cuzco_ui_ux_ui_ux_website_pastel_colors_3c19ea69-11d3-4c9c-8f53-e25ac24e583d.png?width=1194&height=1194"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Cuzco</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://media.discordapp.net/attachments/1074086498850320384/1147244367908712530/arielnlm_city_Cartagenaui_ux_ui_ux_website_pastel_colors_b936f58b-e7d3-4206-bf4f-f559bd8f1d91.png?width=1194&height=1194"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Cartagena</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;