import "./Navbar.css";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar">

      <ul className="nav-links">
        <li><Link to="/">{t("home")}</Link></li>
        <li><Link to="/about">{t("about")}</Link></li>
        <li><Link to="/dashboard">{t("dashboard")}</Link></li>
      </ul>

      <select
  value={i18n.language}
  onChange={(e) => changeLanguage(e.target.value)}
  className="language-select"
>
  <option value="en">🇬🇧 English</option>
  <option value="es">🇪🇸 Español</option>
  <option value="ja">🇯🇵 日本語</option>
  <option value="ms">🇲🇾 Bahasa Melayu</option>
  <option value="ml">🇮🇳 മലയാളം</option>
  <option value="ta">🇮🇳 தமிழ்</option>
  <option value="zh">🇨🇳 中文</option>
</select>

    </nav>
  );
}

export default Navbar;