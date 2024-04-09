import { Sound } from "./Sound"
import Klick from "../assets/sounds/Klick.mp3"
import PopupAndRunTitle from "../assets/sounds/Popup + Run Title.mp3"
import User from "../assets/sounds/User.mp3"
import Select from "../assets/sounds/Select.mp3"
import Nock from "../assets/sounds/Nock.mp3"
import News from "../assets/sounds/News.mp3"
import Shop from "../assets/sounds/Eshop.mp3"
import Album from "../assets/sounds/Album.mp3"
import Controller from "../assets/sounds/Controller.mp3"
import Settings from "../assets/sounds/Settings.mp3"
import Standby from "../assets/sounds/Standby.mp3"
// all sounds are from
// https://downloads.khinsider.com/game-soundtracks/album/nintendo-switch-sound-effects

export const soundMapping: Record<Sound, string> = {
    [Sound.SelectUser]: Nock,
    [Sound.SelectGame]: Klick,
    [Sound.SelectApp]: Select,

    [Sound.OpenGame]: PopupAndRunTitle,
    [Sound.OpenUser]: User,
    [Sound.OpenNews]: News,
    [Sound.OpenShop]: Shop,
    [Sound.OpenAlbum]: Album,
    [Sound.OpenController]: Controller,
    [Sound.OpenSettings]: Settings,
    [Sound.OpenStandby]: Standby,
};