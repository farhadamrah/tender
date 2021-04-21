import React from 'react';
import './Rules.scss';

const Rules = () => {
  return (
    <>
      <div className="rules__wrapper">
        <div className="rules__container">
          <h1 className="header__title">Tender World İstifadəçi Razılaşması</h1>
          <div className="header__article">
            <p>
              Tender.az veb saytında qeydiyyatdan keçməklə, saytın
              xidmətlərindən istifadə edən hər bir hüquqi və ya fiziki şəxs
              aşağıdakı şərtlərlə razılığını bildirir. Əks təqdirdə saytdan
              istifadə edilməsi qadağandır.
            </p>
            <p>
              Bu qayda və şərtlər çox önəmlidir və həm sizin, həm də sayt
              administrasiyasının hüquqlarını qorumaq üçün mövcuddurlar. Zəhmət
              olmasa, onları diqqətlə oxuyun.
            </p>
          </div>
          <div className="rules__articles">
            <p className="paragraph-1">
              <h1 className="paragraph__header">
                <span className="paragraph__header--number">1.</span> Əsas
                anlayışlar
              </h1>
              <div className="paragraph-1__paragraphs">
                <p>
                  <b>1.1 Servis</b> – İnternet şəbəkəsində
                  https://tenderworld.netlify.app/ ünvanında yerləşdirilmiş
                  İnternet-resursu (sayt), müxtəlif əməliyyat sistemləri
                  əsasında sayta əlavələr və başqa xidmətlər, həmçinin proqram
                  təminatıdır, saytın, əlavələrin və başqa xidmətlərin dizaynı
                  (qrafiki tərtibatı), məlumat bazası, xidmətlərin istənilən
                  bölməsi (yarımbölmələri), həmçinin xidmətlərdə Administrasiya
                  və İstifadəçilər tərəfindən yerləşdirilmiş informasiyadır.
                </p>
                <p>
                  <b> 1.2 Administrasiya </b>– Azərbaycan Respublikasının
                  qanunvericiliyinə uyğun olaraq hərəkət edən, qeydiyyatdan
                  keçmiş “https://tenderworld.netlify.app/” saytının
                  mülkiyyətçisidir. Mülkiyyətçi Servisin inzibatçılığını həyata
                  keçirir və ona Servis üçün mülkiyyətin bütün müstəsna
                  hüquqları aiddir.
                </p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rules;
