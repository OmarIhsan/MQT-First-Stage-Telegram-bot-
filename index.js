const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '6881296782:AAFDbdEWIkxE1uCaND64LxqOk-mAbFuNZQ0';

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });
const channelChatId = 'MedicalQuizzesTeam';

const express = require("express"); // Import the express library
const app = express(); // Launch the express app
const http = require("http"); // Import the http library
const server = http.createServer(app); // Create the server

/** Replying to request at '/' */
app.get("/", (req, res) => {
  res.send("Testing...");
});

server.listen(3000, () => {}); // Opening the 3000 port
// Define the initial keyboard 
// Define the initial keyboard
const mainMenu = {
  reply_markup: {
    keyboard: [
      ['1st Semester'],
      ['2nd Semester'],
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};


// Register the '/start' command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const channelName = 'MedicalQuizzesTeam';

  bot.getChatMember(`@MedicalQuizzesTeam`, userId).then((result) => {
    if (result.status === 'member' || result.status === 'creator' || result.status === 'administrator') {
      bot.sendMessage(chatId, 'Please select a Semester', mainMenu);
    } else {
      bot.sendMessage(chatId, 'Please subscribe to the MedicalQuizzesTeam channel to use this bot. t.me/MedicalQuizzesTeam');
    }
  }).catch((error) => {
    console.log(error);
    bot.sendMessage(chatId, 'An error occurred while checking channel subscription.');
  });

});
//1st St.


bot.onText(/1st Semester/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ['1.Anatomy', '1.Chemistry', '1.Biology'],
        ['1.Physics', '1.Computer', '1.English'],
        ['1.Medical Terminology'],
        ['Back to 1st Stage', 'Back to MainMenu']
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, 'Please select a subtopic:', mainKeyboard);

});


bot.onText(/Back to 1st Semester/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ['1.Anatomy', '1.Chemistry', '1.Biology'],
        ['1.Physics', '1.Computer', '1.English'],
        ['1.Medical Terminology'],
        ['Back to MainMenu']
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, 'Please select a subtopic:', mainKeyboard);

});


bot.onText(/1.Anatomy/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ['Anatomy Introduction'],
        ['Anatomy Upper Limb'],
        ['Back to 1st Semester','Back to MainMenu']
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, 'Please select a subtopic:', mainKeyboard);

});
bot.onText(/Back to 1.Anatomy/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ['Anatomy Introduction'],
        ['Anatomy Upper Limb'],
        ['Back to 1st Semester','Back to MainMenu']
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, 'Please select a subtopic:', mainKeyboard);

});

bot.onText(/Anatomy Introduction/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ['Anatomy Introduction Lec. 1'],
        ['Anatomy Introduction Lec. 2'],
        ['Anatomy Introduction Lec. 3'],
        ['Anatomy Introduction Lec. 4'],
        ['Anatomy Introduction Lec. 5'],
        ['Anatomy Introduction Lec. 6'],
        ['Back to 1.Anatomy','Back to MainMenu']
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, 'Please select a lecture:', mainKeyboard);


});

bot.onText(/Anatomy Introduction Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=hbu9QSYA');
});

bot.onText(/Anatomy Introduction Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=rqFWkino');
});

bot.onText(/Anatomy Introduction Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=uhDFwUpf');
});

bot.onText(/Anatomy Introduction Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=wzX3bNHW');
});

bot.onText(/Anatomy Introduction Lec. 5/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=5kj2XgLH');
});

bot.onText(/Anatomy Introduction Lec. 6/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=tlEQQCzf');
});

//

bot.onText(/Anatomy Upper Limb/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ['Breast'],
        ['Pectoral & Posterior Scapular regions'],
        ['Axilla'],
        ['Brachial Plexus'],
        ['Arm & Cubital Fossa'],
        ['Forearm'],
        ['Wrist & Hand'],
        ['Nerve Injuries'],
        ['Back to 1.Anatomy','Back to MainMenu']
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, 'Please select a lecture:', mainKeyboard);


});

bot.onText(/Breast/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=JotiKlOZ');
});

bot.onText(/Pectoral & Posterior Scapular regions/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=4jh8y7Qo');
});

bot.onText(/Axilla/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=cQhBq0px');
});

bot.onText(/Brachial Plexus/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=EC3MDGtl');
});

bot.onText(/Arm & Cubital Fossa/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=fmPFOAWj');
});

bot.onText(/Forearm/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=7MC5qJa8');
});

bot.onText(/Wrist & Hand/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=e6ZfNIvh');
});

bot.onText(/Nerve Injuries/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=StnaN4Np');
});

//

bot.onText(/1.Computer/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ['1.IT'],
        ['1.Windows'],
        ['1.Word'],
        ['Back to 1st Semester','Back to MainMenu']
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, 'Please select a lecture:', mainKeyboard);

});

bot.onText(/1.IT/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=fgPWMErB');
});

bot.onText(/1.Windows/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=p6kX6tdp');
});

bot.onText(/1.Word/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=p6kX6tdp');
});

bot.onText(/1.English/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=LVTHEs3U');
});

bot.onText(/1.Medical Terminology/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=1vSUcOc0');
});



bot.onText(/2nd Semester/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ['-Anatomy', '-Chemistry', '-Biology'],
        ['-Physics', '-Computer', '-English'],
        ['-Foundations in Medicine'],
        ['Back to MainMenu']
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, 'Please select a subtopic:', mainKeyboard);

});


bot.onText(/Back to 2nd Semester/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ['-Anatomy', '-Chemistry', '-Biology'],
        ['-Physics', '-Computer', '-English'],
        ['-Foundations in Medicine'],
        ['Back to 1st Stage', 'Back to MainMenu']
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, 'Please select a subtopic:', mainKeyboard);

});

// Register the 'Anatomy' button
bot.on('message', (msg) => {
  if (msg.text === '-Anatomy') {
    const anatomyMenu = {
      reply_markup: {
        keyboard: [
          ['Thorax'],
          ['Lower Limb'],
          ['Back to 2nd Sem.', 'Back to MainMenu']
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };
    bot.sendMessage(msg.chat.id, 'Please select a subtopic:', anatomyMenu);
  }
});

// Register the 'Thorax' button
bot.on('message', (msg) => {
  if (msg.text === 'Thorax') {
    const thoraxMenu = {
      reply_markup: {
        keyboard: [
          ['Thorax Lec. 1'],
          ['Thorax Lec. 2'],
          ['Thorax Lec. 3'],
          ['Thorax Lec. 4'],
          ['Thorax Lec. 5'],
          ['Thorax Lec. 6'],
          ['Thorax Lec. 7'],
          ['Thorax Lec. 8'],
          ['Thorax Lec. 9'],
          ['-Back to Anatomy', 'Back to MainMenu']

        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };
    bot.sendMessage(msg.chat.id, 'Please select a lecture:', thoraxMenu);
  }
});


bot.onText(/Thorax Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=GF8qBldY');
});


bot.onText(/Thorax Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=zxxnCTZq');
});


bot.onText(/Thorax Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=h16VGvih');
});


bot.onText(/Thorax Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=ZH5TNZIE');
});


bot.onText(/Thorax Lec. 5/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=fpswp3Wt');
});


bot.onText(/Thorax Lec. 6/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=3O0g9Gqs');
});


bot.onText(/Thorax Lec. 7/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=ASHUdONn');
});


bot.onText(/Thorax Lec. 8/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=bpDrp8py');
});

bot.onText(/Thorax Lec. 9/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=KcBdluoh');
});

// Register the 'Lower_Limbs' button
bot.on('message', (msg) => {
  if (msg.text === 'Lower Limb') {
    const limbsMenu = {
      reply_markup: {
        keyboard: [
          ['Lower Limb Lec. 1'],
          ['Lower Limb Lec. 2'],
          ['Lower Limb Lec. 3'],
          ['Lower Limb Lec. 4'],
          ['Lower Limb Lec. 5'],

          ['-Back to Anatomy', 'Back to MainMenu']

        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };
    bot.sendMessage(msg.chat.id, 'Please select a lecture:', limbsMenu);
  }
});

bot.onText(/Lower Limb Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=KSnAerW1');
});


bot.onText(/Lower Limb Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=7LBeZXcK');
});


bot.onText(/Lower Limb Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=rUcd3oAF');
});


bot.onText(/Lower Limb Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=hADBFPK4');
});


bot.onText(/Lower Limb Lec. 5/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=5QJQfvfZ');
});


// Register the 'Chemistry' button
bot.on('message', (msg) => {
  if (msg.text === '-Chemistry') {
    const chemMenu = {
      reply_markup: {
        keyboard: [
          ['Lipids'],
          ['Amino Acids'],
          ['Analytical Chemistry'],
          ['Inorganic Chemistry'],
          ['Pollution'],
          ['Back to 2nd Semester', 'Back to MainMenu']
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };
    bot.sendMessage(msg.chat.id, 'Please select a subtopic:', chemMenu);
  }
});

bot.on('message', (msg) => {
  if (msg.text === 'Lipids') {
    const lipidMenu = {
      reply_markup: {
        keyboard: [
          ['Lipids Lec. 1'],
          ['Lipids Lec. 2'],
          ['Lipids Lec. 3'],
          ['Lipids Lec. 4'],
          ['-Back to Chemistry', 'Back to MainMenu']

        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };
    bot.sendMessage(msg.chat.id, 'Please select a lecture:', lipidMenu);
  }
});


bot.onText(/Lipids Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=wIW97KXo');
});


bot.onText(/Lipids Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=63rY64OE');
});


bot.onText(/Lipids Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=e4Y32vxO');
});


bot.onText(/Lipids Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=qVpFu3lT');
});



bot.on('message', (msg) => {
  if (msg.text === 'Analytical Chemistry') {
    const analMenu = {
      reply_markup: {
        keyboard: [
          ['Analytical Chemistry Lec. 1'],
          ['Analytical Chemistry Lec. 2'],
          ['Analytical Chemistry Lec. 3'],
          ['Analytical Chemistry Lec. 4'],
          ['-Back to Chemistry', 'Back to MainMenu']

        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };
    bot.sendMessage(msg.chat.id, 'Please select a lecture:', analMenu);
  }
});



bot.onText(/Analytical Chemistry Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=EWgyH516');
});


bot.onText(/Analytical Chemistry Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=saKCuWUu');
});


bot.onText(/Analytical Chemistry Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=B2EFYTK7');
});


bot.onText(/Analytical Chemistry Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=YALvSd9k');
});



bot.onText(/Inorganic Chemistry/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=bhhbXGI1');
});


bot.onText(/Pollution/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=NhNnMjH6');
});






bot.on('message', (msg) => {
  if (msg.text === 'Amino Acids') {
    const acidsMenu = {
      reply_markup: {
        keyboard: [
          ['Amino Acids Lec. 1'],
          ['Amino Acids Lec. 2'],
          ['Amino Acids Lec. 3'],
          ['Amino Acids Lec. 4'],
          ['Amino Acids Lec. 5'],
          ['Amino Acids Lec. 6'],
          ['Amino Acids Lec. 7'],
          ['Amino Acids Lec. 8'],
          ['-Back to Chemistry', 'Back to MainMenu']

        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };
    bot.sendMessage(msg.chat.id, 'Please select a lecture:', acidsMenu);
  }
});


bot.onText(/Amino Acids Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=qtRvWChF');
});


bot.onText(/Amino Acids Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=VbnaHSvg');
});


bot.onText(/Amino Acids Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=0K2d4f6N');
});


bot.onText(/Amino Acids Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=K6U4XyT8');
});


bot.onText(/Amino Acids Lec. 5/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=NlT0XlI3');
});


bot.onText(/Amino Acids Lec. 6/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=kIJlKlDE');
});


bot.onText(/Amino Acids Lec. 7/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=rsgBLVdN');
});


bot.onText(/Amino Acids Lec. 8/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=5uHl8qWQ');
});

bot.on('message', (msg) => {
  if (msg.text === '-Biology') {
    const bioMenu = {
      reply_markup: {
        keyboard: [
          ['Genetics'],
          ['Biosafety'],
          ['Histology'],
          ['Back to 2nd Semester', 'Back to MainMenu']
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };
    bot.sendMessage(msg.chat.id, 'Please select a subtopic:', bioMenu);
  }
});



bot.on('message', (msg) => {
  if (msg.text === 'Genetics') {
    const genMenu = {
      reply_markup: {
        keyboard: [
          ['Genetics Lec. 1'],
          ['Genetics Lec. 2'],
          ['Genetics Lec. 3'],
          ['-Back to Biology', 'Back to MainMenu']

        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };
    bot.sendMessage(msg.chat.id, 'Please select a lecture:', genMenu);
  }
});


bot.onText(/Genetics Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=QLyaqISp');
});


bot.onText(/Genetics Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=rYUleSYh');
});


bot.onText(/Genetics Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=NrwBrdQK');
});


bot.on('message', (msg) => {
  if (msg.text === 'Biosafety') {
    const biosMenu = {
      reply_markup: {
        keyboard: [
          ['Biosafety Lec. 3'],
          ['Biosafety Lec. 4'],
          ['Biosafety Lec. 5'],
          ['-Back to Biology', 'Back to MainMenu']
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };
    bot.sendMessage(msg.chat.id, 'Please select a lecture:', biosMenu);
  }
});


bot.onText(/Biosafety Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=QugRDDmu');
});


bot.onText(/Biosafety Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=0Z5ZaNLg');
});


bot.onText(/Biosafety Lec. 5/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=cSMNEjBp');
});



bot.on('message', (msg) => {
  if (msg.text === 'Histology') {
    const histoMenu = {
      reply_markup: {
        keyboard: [
          ['Histology Lec. 01'],
          ['Histology Lec. 02'],
          ['Histology Lec. 03'],
          ['Histology Lec. 04'],
          ['Histology Lec. 05'],
          ['Histology Lec. 06'],
          ['Histology Lec. 07'],
          ['Histology Lec. 08'],
          ['Histology Lec. 09'],
          ['Histology Lec. 10'],
          ['-Back to Biology', 'Back to MainMenu']

        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };
    bot.sendMessage(msg.chat.id, 'Please select a lecture:', histoMenu);
  }
});


bot.onText(/Histology Lec. 01/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=LG5SIe1Q');
});


bot.onText(/Histology Lec. 02/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=2ZMkEfGL');
});


bot.onText(/Histology Lec. 03/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=q53fhku8');
});


bot.onText(/Histology Lec. 04/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=Xi9c3eNc');
});


bot.onText(/Histology Lec. 05/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=RBWHXq7C');
});


bot.onText(/Histology Lec. 06/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=wxl8ZRwP');
});


bot.onText(/Histology Lec. 07/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=w92vvoty');
});


bot.onText(/Histology Lec. 08/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=bHPwD06w');
});


bot.onText(/Histology Lec. 09/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=qGDCg0ua');
});


bot.onText(/Histology Lec. 10/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=so0FaHQs');
});


bot.on('message', (msg) => {
  if (msg.text === '-Physics') {
    const physMenu = {
      reply_markup: {
        keyboard: [
          ['Physics Electricity in the Body pt. 1'],
          ['Physics Electricity in the Body pt. 2'],
          ['Physics Cardiovascular System pt. 1'],
          ['Physics Cardiovascular System pt. 2'],
          ['Back to 2nd Semester', 'Back to MainMenu']

        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };
    bot.sendMessage(msg.chat.id, 'Please select a lecture:', physMenu);
  }
});


bot.onText(/Physics Electricity in the Body pt. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=heXW3nFO');
});


bot.onText(/Physics Electricity in the Body pt. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=fUl6NNwn');
});


bot.onText(/Physics Cardiovascular System pt. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=BtkA5TjR');
});


bot.onText(/Physics Cardiovascular System pt. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=jbZaML6D');
});



bot.on('message', (msg) => {
  if (msg.text === '-Foundations in Medicine') {
    const fimMenu = {
      reply_markup: {
        keyboard: [
          ['Foundations in Medicine Lec. 1'],
          ['Foundations in Medicine Lec. 2'],
          ['Foundations in Medicine Lec. 3'],
          ['Foundations in Medicine Lec. 4'],
          ['Foundations in Medicine Lec. 5'],
          ['Foundations in Medicine Lec. 6'],
          ['Back to 2nd Semester', 'Back to MainMenu']
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };
    bot.sendMessage(msg.chat.id, 'Please select a lecture:', fimMenu);
  }
});


bot.onText(/Foundations in Medicine Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=73rOWtXF');
});


bot.onText(/Foundations in Medicine Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=bwRmCp8t');
});


bot.onText(/Foundations in Medicine Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=AvfgBPh0');
});


bot.onText(/Foundations in Medicine Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=KkbuRKhz');
});


bot.onText(/Foundations in Medicine Lec. 5/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=xL93T5nJ');
});


bot.onText(/Foundations in Medicine Lec. 6/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=JZdNehsh');
});




bot.on('message', (msg) => {
  if (msg.text === '-English') {
    const engMenu = {
      reply_markup: {
        keyboard: [
          ['English Lec. 10'],
          ['English Lec. 11'],
          ['English Lec. 12'],
          ['English Lec. 13'],
          ['English Lec. 14'],
          ['English Lec. 15 & 16'],
          ['Back to 2nd Semester', 'Back to MainMenu']

        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };
    bot.sendMessage(msg.chat.id, 'Please select a lecture:', engMenu);
  }
});


bot.onText(/English Lec. 10/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=YQ0x71uf');
});


bot.onText(/English Lec. 11/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=FbXLGBE6');
});


bot.onText(/English Lec. 12/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=BahtBJOQ');
});


bot.onText(/English Lec. 13/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=puDyoPWH');
});


bot.onText(/English Lec. 14/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=3psK3EJK');
});



bot.onText(/English Lec. 15 & 16/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=9XASdior');
});



bot.on('message', (msg) => {
  if (msg.text === '-Computer') {
    const compMenu = {
      reply_markup: {
        keyboard: [
          ['Word'],
          ['PowerPoint'],
          ['Excel'],
          ['Back to 2nd Semester', 'Back to MainMenu']
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };
    bot.sendMessage(msg.chat.id, 'Please select a subtopic:', compMenu);
  }
});



bot.on('message', (msg) => {
  if (msg.text === 'Word') {
    const wordMenu = {
      reply_markup: {
        keyboard: [
          ['Word Lec. 4'],
          ['-Back to Computer', 'Back to MainMenu']
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };
    bot.sendMessage(msg.chat.id, 'Please select a lecture:', wordMenu);
  }
});


bot.onText(/Word Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=JuFo0ybS');
});


bot.on('message', (msg) => {
  if (msg.text === 'PowerPoint') {
    const ppMenu = {
      reply_markup: {
        keyboard: [
          ['PowerPoint Lec. 1'],
          ['PowerPoint Lec. 2'],
          ['PowerPoint Lec. 3'],
          ['-Back to Computer', 'Back to MainMenu']
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };
    bot.sendMessage(msg.chat.id, 'Please select a lecture:', ppMenu);
  }
});


bot.onText(/PowerPoint Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=nFPX1SaV');
});


bot.onText(/PowerPoint Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=C16rd50S');
});


bot.onText(/PowerPoint Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=1E9u8G0L');
});



bot.on('message', (msg) => {
  if (msg.text === 'Excel') {
    const excelMenu = {
      reply_markup: {
        keyboard: [
          ['Excel Lec. 1'],
          ['Excel Lec. 2'],
          ['Excel Lec. 3 & 4'],
          ['-Back to Computer', 'Back to MainMenu']
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };
    bot.sendMessage(msg.chat.id, 'Please select a lecture:', excelMenu);
  }
});


bot.onText(/Excel Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=lw6Es9s0');
});


bot.onText(/Excel Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=VNlLVuh5');
});


bot.onText(/Excel Lec. 3 & 4/, (msg) => {
  bot.sendMessage(msg.chat.id, 't.me/QuizBot?start=sEjp6hFB');
});



bot.onText(/Back to MainMenu/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ['1st Semester'],
        ['2nd Semester'],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, 'Please select a topic:', mainKeyboard);

});


bot.onText(/-Back to Anatomy/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ['Thorax'],
        ['Lower Limb'],
        ['Back to 2nd Semester', 'Back to MainMenu']
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, 'Please select a subtopic:', mainKeyboard);

});

//Back to Chemistry

bot.onText(/-Back to Chemistry/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ['Lipids'],
        ['Amino Acids'],
        ['Analytical Chemistry'],
        ['Inorganic Chemistry'],
        ['Pollution'],
        ['Back to 2nd Semester', 'Back to MainMenu']
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, 'Please select a subtopic:', mainKeyboard);

});
//Back to Biology 

bot.onText(/-Back to Biology/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ['Genetics'],
        ['Biosafety'],
        ['Histology'],
        ['Back to 2nd Semester', 'Back to MainMenu']
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, 'Please select a subtopic:', mainKeyboard);

});
//Back to Computer


bot.onText(/-Back to Computer/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ['Word'],
        ['PowerPoint'],
        ['Excel'],
        ['Back to 2nd Semester', 'Back to MainMenu']
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, 'Please select a subtopic:', mainKeyboard);

});
