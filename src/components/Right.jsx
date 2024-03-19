// Right.js

import SalesAnalytics from "./SalesAnalytics";

function Right() {
  return (
    <div className="right">
      <div className="right">
        <div className="top">
          <button id="menu-btn">
            <span className="material-icons-sharp">menu</span>
          </button>
          <div className="theme-toggler">
            <span className="material-icons-sharp active">light_mode</span>
            <span className="material-icons-sharp">dark_mode</span>
          </div>
          <div className="profile">
            <div className="info">
              <p>
                Hey, <b>Jorge</b>
              </p>
              <small className="text-muted">Admin</small>
            </div>
          </div>
          <div className="profile-photo">
            <img src="./images/profile-1.jpg" alt="Profile" />
          </div>
        </div>

        {/* <!--! ---------------- STATE -----------------> */}

        <div className="recent-updates">
          <h2>Notificaciones</h2>
          <div className="updates">
            <div className="update">
              <span className="material-symbols-outlined">
                mark_email_unread
              </span>

              <div className="message">
                <p>
                  <b>Resultados</b> Su resultado del internista ya se encuentra
                  disponible.
                </p>
                <small className="text-muted">Visualizar</small>
              </div>
            </div>

            <div className="update">
              <span className="material-symbols-outlined">
                mark_email_unread
              </span>

              <div className="message">
                <p>
                  <b>Cita agendada</b> Agendamiento de cita programada con
                  exito.
                </p>
                <small className="text-muted">Visualizar</small>
              </div>
            </div>

            {/*  <!--! ---------------- COLOCAR UNA PAGINACION -----------------> */}
          </div>
        </div>

        {/* <!--! ---------------- SALES ANALYTICS -----------------> */}

        <SalesAnalytics />
      </div>
    </div>
  );
}

export default Right;
