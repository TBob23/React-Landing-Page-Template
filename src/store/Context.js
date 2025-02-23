import React from 'react'

import appLogo from '../images/amplichat.png'

import appleStoreBadge from '../images/apple_store_badge.svg'
import googlePlayBadge from '../images/google_play_badge.png'

import coverImage from '../images/amplichat_iphones_two.png'

// endorsement images
import dreamhub_filled from '../images/dreamhub_filled.png'
import voiceqna_filled from '../images/voiceqna_fill_v2_gradient.png'
import voicemirror_filled from '../images/voice_mirror_v_1024.png'
import bazipaipai_unfilled from '../images/bazipaipai_64.png'
import spindrifthome_filled from '../images/sh_unfill_1024.png'


// section images
import guitar from '../images/guitar.jpg'
import event_phones from '../images/event_phones.jpeg'
import foggy_blue from '../images/foggy_blue.jpg'
import purple_phones from '../images/purple_phones.png'
import purple_light from '../images/purple_light.jpg'
import concert_classic from '../images/concert_classic.jpg'

import discordImage from '../images/discord.png'

export const initialState = {
    // when in dev, change appURL to local url
    // appURL: 'http://localhost:3000',  
    // when in production, change appURL to real url
    appURL: 'https://amplichat.com',

    appLogo: appLogo,
    appName: 'SightSnap',

    coverTitle: 'SightSnap - Discover New Horizons',
    coverText: 'Explore, Collect, Remember -- Your Digital Travel Diary -- Collect Moments, Not Just Places',
    appleStoreBadge: appleStoreBadge,
    appleStoreLink: 'https://apps.apple.com/us/app/amplichat/id1499570373',
    googlePlayBadge: googlePlayBadge,
    googlePlayLink: 'https://apps.apple.com/us/app/amplichat/id1499570373',

    coverImage: coverImage,

    endorsementTitle: `Your World, One Snap at a Time – Explore, Collect, and Relive Every Moment.`,
    endorsementText: `SightSnap Turns Your Adventures into a Digital Collection of Unforgettable Experiences.`,
    endorsementList: [
        {
            title: `DreamHub: Visualized Stories`,
            titleColor: `orangeRed`,
            image: dreamhub_filled,
            URL: `https://dreamhub.app`,
        },
        {
            title: `VoiceQnA: Speak a New Language`,
            titleColor: `forestGreen`,
            image: voiceqna_filled,
            URL: `https://voiceqna.com`,
        },
        {
            title: `VoiceMirror: Travel Translator`,
            titleColor: `blue`,
            image: voicemirror_filled,
            URL: `https://voiceqna.com/mirror`,
        },
        {
            title: `BaZiPaiPai: Know Your Destiny`,
            titleColor: `black`,
            image: bazipaipai_unfilled,
            URL: `https://bazipaipai.com`,
        },
        {
            title: `SpindriftHome: HOA Management`,
            titleColor: `orangeRed`,
            image: spindrifthome_filled,
            URL: `https://spindrifthome.com`,
        },
    ],

    sectionList: [
        {
            'title': `Explore Landmarks`,
            'text': `Discover iconic places and hidden gems around the world.`,
            'image': guitar,
        },
        {
            'title': `Capture & Collect`,
            'text': `Turn your travels into a digital collection of unforgettable moments.`,
            'image': event_phones,
        },
        {
            'title': `Track Events & Experiences`,
            'text': `Never miss a special moment—log your visits to festivals, sports, and more.`,
            'image': foggy_blue,
        },
        {
            'title': `Discover & Save Restaurants`,
            'text': `Keep track of your favorite dining spots and must-visit eateries.`,
            'image': purple_phones,
        },
        {
            'title': `Personalized Insights`,
            'text': `See your travel stats, milestones, and top destinations in one place.`,
            'image': purple_light,
        },
        {
            'title': `QR Code Magic`,
            'text': `Scan, save, and relive every experience with a simple QR code.`,
            'image': concert_classic,
        },
    ],

    discordImage: discordImage,
    discordLink: 'https://discord.com/invite/aFQPYyAVDq',
}

const initialContext = {
    state: initialState,
    dispatch: () => null,
}

export const Context = React.createContext(initialContext)
