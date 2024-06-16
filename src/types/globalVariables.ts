import { makeVar } from '@apollo/client';
import { Id } from './Id';
import { ElementData } from './ElementData';
import zeldaBreathOfTheWildCover from "../assets/images/covers/The Legend of Zelda Breath of the Wild.jpg"
import marioKart8DeluxeCover from "../assets/images/covers/Mario Kart 8 Deluxe.jpg"
import animalCrossingNewHorizonsCover from "../assets/images/covers/Animal Crossing New Horizons.jpg"
import humanFallFlatCover from "../assets/images/covers/Human Fall Flat.jpg"
import superSmashBrothersUltimateCover from "../assets/images/covers/Super Smash Brothers Ultimate.jpg"
import gangBeastsCover from "../assets/images/covers/Gang Beasts.jpg"
import darkSoulsCover from "../assets/images/covers/Dark Souls Remastered.jpg"
import donkeyKongCountryTropicalFreezeCover from "../assets/images/covers/Donkey Kong Country Tropical Freeze.jpg"
import marioPartySuperstarsCover from "../assets/images/covers/Mario Party Superstars.jpg"
import minecraftCover from "../assets/images/covers/Minecraft.jpg"
import pikmin3Cover from "../assets/images/covers/Pikmin 3.jpg"
import pokemonLetsGoPikachuCover from "../assets/images/covers/Pokémon Let's Go Pikachu!.jpg"
import abzuCover from "../assets/images/covers/abzu.jpg"
import borderlandsCover from "../assets/images/covers/borderlands.jpg"
import brothersCover from "../assets/images/covers/brothers a tale of two sons.jpg"
import celesteCover from "../assets/images/covers/celeste.jpg"
import farmingSimulator20Cover from "../assets/images/covers/farming simulator 20.jpg"
import hollowKnightCover from "../assets/images/covers/hollow knight.jpg"
import kirbyAndTheForgottenLandCover from "../assets/images/covers/kirby and the forgotten land.jpg"
import littleNighmaresCover from "../assets/images/covers/little nightmares.jpg"
import luigisMansionCover from "../assets/images/covers/luigi's mansion 3.jpg"
import newPokemonSnapCover from "../assets/images/covers/new pokemon snap.jpg"
import pokemonShieldCover from "../assets/images/covers/pokemon shield.jpg"
import pokemonShiningPearlCover from "../assets/images/covers/pokemon shining pearl.jpg"
import superMario3dAllStarsCover from "../assets/images/covers/super mario 3d all stars.jpg"
import superMario3dWorldCover from "../assets/images/covers/super mario 3d world.jpg"
import zeldaLinksAwakeningCover from "../assets/images/covers/zelda link's awakening.jpg"

export const selectedIdVar = makeVar<Id>(Id.zeldaBreathOfTheWild);

export const gamesVar = makeVar<ElementData[]>([
    new ElementData(Id.zeldaBreathOfTheWild, "The Legend of Zelda Breath of the Wild", zeldaBreathOfTheWildCover),
    new ElementData(Id.marioKart8Deluxe, "Mario Kart 8 Deluxe", marioKart8DeluxeCover),
    new ElementData(Id.animalCrossingNewHorizons, "Animal Crossing New Horizons", animalCrossingNewHorizonsCover),
    new ElementData(Id.humanFallFlat, "Human Fall Flat", humanFallFlatCover),
    new ElementData(Id.gangBeasts, "Gang Beasts", gangBeastsCover),
    new ElementData(Id.superSmashBrothersUltimate, "Super Smash Brothers Ultimate", superSmashBrothersUltimateCover),
    new ElementData(Id.darkSouls, "Dark Souls Remastered", darkSoulsCover),
    new ElementData(Id.donkeyKongCountryTropicalFreeze, "Donkey Kong Country Tropical Freeze", donkeyKongCountryTropicalFreezeCover),
    new ElementData(Id.marioPartySuperstars, "Mario Party Superstars", marioPartySuperstarsCover),
    new ElementData(Id.minecraft, "Minecraft", minecraftCover),
    new ElementData(Id.pikmin3, "Pikmin 3", pikmin3Cover),
    new ElementData(Id.pokemonLetsGoPikachu, "Pokémon Let's Go Pikachu!", pokemonLetsGoPikachuCover),
    new ElementData(Id.abzu, "Abzu", abzuCover),
    new ElementData(Id.borderlands, "Borderlands", borderlandsCover),
    new ElementData(Id.brothers, "Brothers A Tale of Two Sons", brothersCover),
    new ElementData(Id.celeste, "Celeste", celesteCover),
    new ElementData(Id.farmingSimulator20, "Farming Simulator 20", farmingSimulator20Cover),
    new ElementData(Id.hollowKnight, "Hollow Knight", hollowKnightCover),
    new ElementData(Id.kirbyAndTheForgottenLand, "Kirby and the Forgotten Land", kirbyAndTheForgottenLandCover),
    new ElementData(Id.littleNightmares, "Little Nightmares", littleNighmaresCover),
    new ElementData(Id.luigisMansion3, "Luigi's Mansion 3", luigisMansionCover),
    new ElementData(Id.newPokemonSnap, "New Pokémon Snap", newPokemonSnapCover),
    new ElementData(Id.pokemonShield, "Pokemon Schild", pokemonShieldCover),
    new ElementData(Id.pokemonShiningPearl, "Pokemon Shining Pearl", pokemonShiningPearlCover),
    new ElementData(Id.superMario3dAllStars, "Super Mario 3D All Stars", superMario3dAllStarsCover),
    new ElementData(Id.superMario3dWorld, "Super Mario 3D World Bowser's Fury", superMario3dWorldCover),
    new ElementData(Id.zeldaLinksAwakening, "Zelda Link's Awakening", zeldaLinksAwakeningCover),
]);