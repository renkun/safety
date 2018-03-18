exports.specs = {
  env: {
    appName: {
      args: {
        callback: {
          types: ['function'],
          optional: false,
        },
      },
      return: null,
    },
    appVersion: {
      args: {
        callback: {
          types: ['function'],
          optional: false,
        },
      },
      return: null,
    },
  },

  browserAction: {
    setIcon: {
      args: {
        details: {
          types: ['object'],
          optional: false,
        },
        callback: {
          types: ['function'],
          optional: true,
        },
      },
      return: null,
    },
    setBadgeText: {
      args: {
        details: {
          types: ['object'],
          optional: false,
        },
      },
      return: null,
    },
    setBadgeBackgroundColor: {
      args: {
        details: {
          types: ['object'],
          optional: false,
        },
      },
      return: null,
    },
    onClicked: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
          },
          return: null,
        },
      },
    },
  },

  pageAction: {
    setIcon: {
      args: {
        details: {
          types: ['object'],
          optional: false,
        },
        callback: {
          types: ['function'],
          optional: true,
        },
      },
      return: null,
    },
    show: {
      args: {
        tabId: {
          types: ['number'],
          optional: false,
        },
      },
      return: null,
    },
    hide: {
      args: {
        tabId: {
          types: ['number'],
          optional: false,
        },
      },
      return: null,
    },
    onClicked: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
          },
          return: null,
        },
      },
    },
  },

  commands: {
    onCommand: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
          },
          return: null,
        },
      },
    },
  },

  alarms: {
    get: {
      args: {
        name: {
          types: ['string'],
          optional: true,
        },
        callback: {
          types: ['function'],
          optional: false,
        },
      },
      return: null,
    },
    getAll: {
      args: {
        callback: {
          types: ['function'],
          optional: false,
        },
      },
      return: null,
    },
    clear: {
      args: {
        name: {
          types: ['string'],
          optional: true,
        },
        callback: {
          types: ['function'],
          optional: true,
        },
      },
      return: null,
    },
    clearAll: {
      args: {
        callback: {
          types: ['function'],
          optional: true,
        },
      },
      return: null,
    },
    create: {
      args: {
        name: {
          types: ['string'],
          optional: true,
        },
        alarmInfo: {
          types: ['object'],
          optional: false,
        },
      },
      return: null,
    },
    onAlarm: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
          },
          return: null,
        },
      },
    },
  },

  runtime: {
    getManifest: {
      args: {},
      return: 'object',
    },
    getURL: {
      args: {
        path: {
          types: ['string'],
          optional: false,
        },
      },
      return: 'string',
    },
    sendMessage: {
      args: {
        extensionId: {
          types: ['string'],
          optional: true,
        },
        message: {
          types: ['number', 'string', 'object', 'boolean'],
          optional: false,
        },
        responseCallback: {
          types: ['function'],
          optional: true,
        },
      },
      return: null,
    },
    connect: {
      args: {
        extensionId: {
          types: ['string'],
          optional: true,
        },
        connectInfo: {
          types: ['object'],
          optional: true,
        },
      },
      return: ['object'],
    },
    onMessage: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
          },
          return: null,
        },
      },
    },
    onConnect: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
          },
          return: null,
        },
      },
    },
  },

  extension: {
    getURL: {
      args: {
        path: {
          types: ['string'],
          optional: false,
        },
      },
      return: 'string',
    },
    getBackgroundPage: {
      args: {},
      return: 'object',
    },
  },

  tabs: {
    get: {
      args: {
        tabId: {
          types: ['number'],
          optional: false,
        },
        callback: {
          types: ['function'],
          optional: false,
        },
      },
      return: null,
    },
    getCurrent: {
      args: {
        callback: {
          types: ['function'],
          optional: false,
        },
      },
      return: null,
    },
    duplicate: {
      args: {
        tabId: {
          types: ['number'],
          optional: false,
        },
        callback: {
          types: ['function'],
          optional: false,
        },
      },
      return: null,
    },
    query: {
      args: {
        queryInfo: {
          types: ['object'],
          optional: false,
        },
        callback: {
          types: ['function'],
          optional: false,
        },
      },
      return: null,
    },
    update: {
      args: {
        tabId: {
          types: ['number'],
          optional: true,
        },
        updateProperties: {
          types: ['object'],
          optional: false,
        },
        callback: {
          types: ['function'],
          optional: true,
        },
      },
      return: null,
    },
    reload: {
      args: {
        tabId: {
          types: ['number'],
          optional: true,
        },
        reloadProperties: {
          types: ['object'],
          optional: false,
        },
        callback: {
          types: ['function'],
          optional: true,
        },
      },
      return: null,
    },
    create: {
      args: {
        createProperties: {
          types: ['object'],
          optional: false,
        },
        callback: {
          types: ['function'],
          optional: true,
        },
      },
      return: null,
    },
    remove: {
      args: {
        tabIds: {
          types: ['number', 'object'],
          optional: false,
        },
        callback: {
          types: ['function'],
          optional: false,
        },
      },
      return: null,
    },
    detectLanguage: {
      args: {
        tabId: {
          types: ['number'],
          optional: true,
        },
        callback: {
          types: ['function'],
          optional: false,
        },
      },
      return: null,
    },
    executeScript: {
      args: {
        tabId: {
          types: ['number'],
          optional: true,
        },
        details: {
          types: ['object'],
          optional: false,
        },
        callback: {
          types: ['function'],
          optional: true,
        },
      },
      return: null,
    },
    insertCSS: {
      args: {
        tabId: {
          types: ['number'],
          optional: true,
        },
        details: {
          types: ['object'],
          optional: false,
        },
        callback: {
          types: ['function'],
          optional: true,
        },
      },
      return: null,
    },
    sendMessage: {
      args: {
        tabId: {
          types: ['number'],
          optional: false,
        },
        message: {
          types: ['number', 'string', 'object', 'boolean'],
          optional: true,
        },
        responseCallback: {
          types: ['function'],
          optional: true,
        },
      },
      return: null,
    },
    onUpdated: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
          },
          return: null,
        },
      },
    },
    onCreated: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
          },
          return: null,
        },
      },
    },
    onRemoved: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
          },
          return: null,
        },
      },
    },
  },

  windows: {
    get: {
      args: {
        windowId: {
          types: ['number'],
          optional: false,
        },
        getInfo: {
          types: ['object'],
          optional: true,
        },
        callback: {
          types: ['function'],
          optional: false,
        },
      },
      return: null,
    },
    getCurrent: {
      args: {
        getInfo: {
          types: ['object'],
          optional: true,
        },
        callback: {
          types: ['function'],
          optional: false,
        },
      },
      return: null,
    },
    getAll: {
      args: {
        getInfo: {
          types: ['object'],
          optional: true,
        },
        callback: {
          types: ['function'],
          optional: false,
        },
      },
      return: null,
    },
  },

  storage: {
    set: {
      args: {
        items: {
          types: ['object'],
          optional: false,
        },
        callback: {
          types: ['function'],
          optional: true,
        },
      },
      return: null,
    },
    get: {
      args: {
        keys: {
          types: ['object', 'string'],
          optional: true,
        },
        callback: {
          types: ['function'],
          optional: false,
        },
      },
      return: null,
    },
    remove: {
      args: {
        keys: {
          types: ['object', 'string'],
          optional: false,
        },
        callback: {
          types: ['function'],
          optional: true,
        },
      },
      return: null,
    },
    onChanged: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
          },
          return: null,
        },
      },
    },
  },

  contextMenus: {
    create: {
      args: {
        createProperties: {
          types: ['object'],
          optional: false,
        },
        callback: {
          types: ['function'],
          optional: true,
        },
      },
      return: ['number', 'string'],
    },
    remove: {
      args: {
        menuItemId: {
          types: ['number', 'string'],
          optional: false,
        },
        callback: {
          types: ['function'],
          optional: true,
        },
      },
      return: null,
    },
    removeAll: {
      args: {
        callback: {
          types: ['function'],
          optional: true,
        },
      },
    },
  },

  i18n: {
    getAcceptLanguages: {
      args: {
        callback: {
          types: ['function'],
          optional: false,
        },
      },
      return: null,
    },
    getMessage: {
      args: {
        messageName: {
          types: ['string'],
          optional: false,
        },
        substitutions: {
          types: ['number', 'string', 'object', 'boolean'],
          optional: true,
        },
      },
      return: ['string'],
    },
    getUILanguage: {
      args: {},
      return: ['string'],
    },
    detectLanguage: {
      args: {
        text: {
          types: ['string'],
          optional: false,
        },
        callback: {
          types: ['function'],
          optional: false,
        },
      },
      return: null,
    },
  },

  webRequest: {
    onBeforeRequest: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
            filter: {
              types: ['object'],
              optional: true,
            },
            opt_extraInfoSpec: {
              types: ['object'],
              optional: true,
            },
          },
          return: null,
        },
      },
    },
    onBeforeSendHeaders: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
            filter: {
              types: ['object'],
              optional: true,
            },
            opt_extraInfoSpec: {
              types: ['object'],
              optional: true,
            },
          },
          return: null,
        },
      },
    },
    onSendHeaders: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
            filter: {
              types: ['object'],
              optional: true,
            },
            opt_extraInfoSpec: {
              types: ['object'],
              optional: true,
            },
          },
          return: null,
        },
      },
    },
    onHeadersReceived: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
            filter: {
              types: ['object'],
              optional: true,
            },
            opt_extraInfoSpec: {
              types: ['object'],
              optional: true,
            },
          },
          return: null,
        },
      },
    },
    onResponseStarted: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
            filter: {
              types: ['object'],
              optional: true,
            },
            opt_extraInfoSpec: {
              types: ['object'],
              optional: true,
            },
          },
          return: null,
        },
      },
    },
    onBeforeRedirect: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
            filter: {
              types: ['object'],
              optional: true,
            },
            opt_extraInfoSpec: {
              types: ['object'],
              optional: true,
            },
          },
          return: null,
        },
      },
    },
    onCompleted: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
            filter: {
              types: ['object'],
              optional: true,
            },
            opt_extraInfoSpec: {
              types: ['object'],
              optional: true,
            },
          },
          return: null,
        },
      },
    },
    onErrorOccurred: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
            filter: {
              types: ['object'],
              optional: true,
            },
            opt_extraInfoSpec: {
              types: ['object'],
              optional: true,
            },
          },
          return: null,
        },
      },
    },
  },

  webNavigation: {
    getFrame: {
      args: {
        details: {
          types: ['object'],
          optional: false,
        },
        callback: {
          types: ['function'],
          optional: false,
        },
      },
      return: null,
    },
    getAllFrames: {
      args: {
        details: {
          types: ['object'],
          optional: false,
        },
        callback: {
          types: ['function'],
          optional: false,
        },
      },
      return: null,
    },
    onBeforeNavigate: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
          },
          return: null,
        },
      },
    },
    onCommitted: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
          },
          return: null,
        },
      },
    },
    onDOMContentLoaded: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
          },
          return: null,
        },
      },
    },
    onCompleted: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
          },
          return: null,
        },
      },
    },
    onCreatedNavigationTarget: {
      methods: {
        addListener: {
          args: {
            callback: {
              types: ['function'],
              optional: false,
            },
          },
          return: null,
        },
      },
    },
  },
};
