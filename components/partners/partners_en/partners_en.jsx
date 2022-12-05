import container from "../../../styles/container.module.css";
import Image from "next/image";
import s from "../partners.module.css"
import Alexander_Lutchak from "../../../images/partners/Alexander_Lutchak.png"
import Alexandra_Degas from "../../../images/partners/Alexandra_Degas.png"
import Alisa_Ulyankina from "../../../images/partners/Alisa_Ulyankina.png"
import Anna_Dovbush from "../../../images/partners/Anna_Dovbush.png"
import Anton_Kosenko from "../../../images/partners/Anton_Kosenko.png"
import Denis_Shust from "../../../images/partners/Denis_Shust.png"
import Dima_Vasylenko from "../../../images/partners/Dima_Vasylenko.png"
import Ivan_Borodin from "../../../images/partners/Ivan_Borodin.png"
import Kate_Esterlin from "../../../images/partners/Kate_Esterlin.png"
import Mitya_Borodin from "../../../images/partners/Mitya_Borodin.png"
import Ruslan_Bogdan from "../../../images/partners/Ruslan_Bogdan.png"
import Vadim_Lysak from "../../../images/partners/Vadim_Lysak.png"
import Vladimir_Akulov from "../../../images/partners/Vladimir_Akulov.png"
import Yura_Katynsky from "../../../images/partners/Yura_Katynsky.png"
import Yurii_Konovalskyi from "../../../images/partners/Yurii_Konovalskyi.png"
export default function Partners_en() {
    return (
        <section className={`${container.container__stretch} ${s.partners}`}>
            <ul className={s.partners__list}>
                <li className={s.partners__item}>
                    <span className={s.partners__iamge}>
                        <Image fill src={Ruslan_Bogdan} alt = "Ruslan Bogdan" />
                    </span>
                    <div className={s.partners__text}>
                        <p className={s.partners__name}>
                            Ruslan Bogdan
                        </p>
                        <p className={s.partners__employment}>
                            DOP
                        </p>
                    </div>
                </li>
                <li className={s.partners__item}>
                    <span className={s.partners__iamge}>
                        <Image fill src={Vladimir_Akulov} alt = "Vladimir Akulov"/>
                    </span>
                    <div className={s.partners__text}>
                        <p className={s.partners__name}>
                            Vladimir Akulov
                        </p>
                        <p className={s.partners__employment}>
                            Gafer
                        </p>
                    </div>
                </li>
                <li className={s.partners__item}>
                    <span className={s.partners__iamge}>
                        <Image fill src={ Denis_Shust} alt = "Denis Shust" />
                    </span>
                    <div className={s.partners__text}>
                        <p className={s.partners__name}>
                            Denis Shust
                        </p>
                        <p className={s.partners__employment}>
                            Gafer
                        </p>
                    </div>
                </li>
                <li className={s.partners__item}>
                    <span className={s.partners__iamge}>
                        <Image fill src={Yurii_Konovalskyi} alt = "Yurii Konovalskyi"/>
                    </span>
                    <div className={s.partners__text}>
                        <p className={s.partners__name}>
                            Yurii Konovalskyi
                        </p>
                        <p className={s.partners__employment}>
                            1AC Focuspuller
                        </p>
                    </div>
                </li>
                <li className={s.partners__item}>
                    <span className={s.partners__iamge}>
                        <Image fill src={Mitya_Borodin} alt = "Mitya Borodin"/>
                    </span>
                    <div className={s.partners__text}>
                        <p className={s.partners__name}>
                            Mitya Borodin
                        </p>
                        <p className={s.partners__employment}>
                            1st Assistant Director
                        </p>
                    </div>
                </li>
                <li className={s.partners__item}>
                    <span className={s.partners__iamge}>
                        <Image fill src={Vadim_Lysak} alt = "Vadim Lysak"/>
                    </span>
                    <div className={s.partners__text}>
                        <p className={s.partners__name}>
                            Vadim Lysak
                        </p>
                        <p className={s.partners__employment}>
                            SFX
                        </p>
                    </div>
                </li>
                <li className={s.partners__item}>
                    <span className={s.partners__iamge}>
                        <Image fill src={Alexander_Lutchak} alt = "Alexander Lutchak"/>
                    </span>
                    <div className={s.partners__text}>
                        <p className={s.partners__name}>
                            Alexander Lutchak
                        </p>
                        <p className={s.partners__employment}>
                            Sound director
                        </p>
                    </div>
                </li>
                <li className={s.partners__item}>
                    <span className={s.partners__iamge}>
                        <Image fill src={Anna_Dovbush} alt = "Anna Dovbush"/>
                    </span>
                    <div className={s.partners__text}>
                        <p className={s.partners__name}>
                            Anna Dovbush
                        </p>
                        <p className={s.partners__employment}>
                            Art director
                        </p>
                    </div>
                </li>
                <li className={s.partners__item}>
                    <span className={s.partners__iamge}>
                        <Image fill src={Alexandra_Degas} alt = "Alexandra Degas"/>
                    </span>
                    <div className={s.partners__text}>
                        <p className={s.partners__name}>
                            Alexandra Degas
                        </p>
                        <p className={s.partners__employment}>
                            Art director
                        </p>
                    </div>
                </li>
                <li className={s.partners__item}>
                    <span className={s.partners__iamge}>
                        <Image fill src={Alisa_Ulyankina} alt = "Alisa Ulyankina"/>
                    </span>
                    <div className={s.partners__text}>
                        <p className={s.partners__name}>
                            Alisa Ulyankina
                        </p>
                        <p className={s.partners__employment}>
                            Make up
                        </p>
                    </div>
                </li>
                <li className={s.partners__item}>
                    <span className={s.partners__iamge}>
                        <Image fill src={Anton_Kosenko} alt = "Anton Kosenko"/>
                    </span>
                    <div className={s.partners__text}>
                        <p className={s.partners__name}>
                            Anton Kosenko
                        </p>
                        <p className={s.partners__employment}>
                            Location manager
                        </p>
                    </div>
                </li>
                <li className={s.partners__item}>
                    <span className={s.partners__iamge}>
                        <Image fill src={Yura_Katynsky} alt ="Yura Katynsky"/>
                    </span>
                    <div className={s.partners__text}>
                        <p className={s.partners__name}>
                            Yura Katynsky
                        </p>
                        <p className={s.partners__employment}>
                            Edit
                        </p>
                    </div>
                </li>
                <li className={s.partners__item}>
                    <span className={s.partners__iamge}>
                        <Image fill src={Dima_Vasylenko} alt ="Dima Vasylenko"/>
                    </span>
                    <div className={s.partners__text}>
                        <p className={s.partners__name}>
                            Dima Vasylenko
                        </p>
                        <p className={s.partners__employment}>
                            Color
                        </p>
                    </div>
                </li>

                <li className={s.partners__item}>
                    <span className={s.partners__iamge}>
                        <Image fill src={Kate_Esterlin} alt ="Kate Esterlin"/>
                    </span>
                    <div className={s.partners__text}>
                        <p className={s.partners__name}>
                            Kate Esterlin
                        </p>
                        <p className={s.partners__employment}>
                            BTS
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    )
}