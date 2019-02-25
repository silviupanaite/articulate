"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RASA_CURRENT_TRAINING_PROCESSES = exports.RASA_AVAILABLE_PROJECTS = exports.CONFIG_SETTINGS_ALL = exports.CONFIG_SETTINGS_DEFAULT_AGENT = exports.CONFIG_SETTINGS_RASA_TRAINING = exports.CONFIG_KEYWORD_TYPE_REGEX = exports.CONFIG_KEYWORD_TYPE_LEARNED = exports.CONFIG_SETTINGS_DEFAULT_UI_SESSION_ID = exports.CONFIG_SETTINGS_MODIFIER_VALUE_SOURCE = exports.CONFIG_SETTINGS_MODIFIER_ACTIONS = exports.CONFIG_SETTINGS_MODIFIER_SAYINGS_PAGE_SIZE = exports.CONFIG_SETTINGS_REVIEW_PAGE_SIZE = exports.CONFIG_SETTINGS_KEYWORDS_PAGE_SIZE = exports.CONFIG_SETTINGS_SAYINGS_PAGE_SIZE = exports.CONFIG_SETTINGS_DEFAULT_FALLBACK_ACTION_NAME = exports.CONFIG_SETTINGS_RESPONSES_AGENT_DEFAULT = exports.CONFIG_SETTINGS_TIMEZONES_DEFAULT = exports.CONFIG_SETTINGS_TIMEZONES = exports.CONFIG_SETTINGS_LANGUAGES_AGENT_DEFAULT = exports.CONFIG_SETTINGS_LANGUAGES_AGENT = exports.CONFIG_SETTINGS_LANGUAGES_DEFAULT = exports.CONFIG_SETTINGS_LANGUAGES = exports.CONFIG_SETTINGS_KEYWORD_PIPELINE = exports.CONFIG_SETTINGS_SAYING_PIPELINE = exports.CONFIG_SETTINGS_CATEGORY_PIPELINE = exports.CONFIG_SETTINGS_SPACY_ENTITIES = exports.CONFIG_SETTINGS_DUCKLING_DIMENSION = exports.CONFIG_SETTINGS_DUCKLING_URL = exports.CONFIG_SETTINGS_RASA_URL = exports.MODEL_TO_ROUTE = exports.ROUTE_TO_MODEL = exports.PARAM_DOCUMENT_SESSION = exports.PARAM_DOCUMENT_AGENT_MODEL = exports.PARAM_DOCUMENT_AGENT_ID = exports.PARAM_DOCUMENT_ACTION_RANKING = exports.PARAM_DOCUMENT_RASA_RESULTS = exports.PARAM_DOCUMENT_TOTAL_ELAPSED_TIME = exports.PARAM_DOCUMENT_MAXIMUM_CATEGORY_SCORE = exports.PARAM_DOCUMENT_MAXIMUM_SAYING_SCORE = exports.PARAM_DOCUMENT_TIME_STAMP = exports.PARAM_DOCUMENT_ID = exports.PARAM_SAYING_ID = exports.PARAM_KEYWORD_ID = exports.PARAM_CATEGORY_ID = exports.PARAM_AGENT_ID = exports.PARAM_ACTION_ID = exports.PARAM_INCLUDE = exports.PARAM_FILTER = exports.PARAM_SEARCH = exports.PARAM_BULK = exports.PARAM_TIMEZONE = exports.PARAM_TEXT = exports.PARAM_DEBUG = exports.PARAM_LOAD_FRAMES = exports.PARAM_FRAME = exports.PARAM_SESSION = exports.PARAM_DIRECTION = exports.PARAM_LIMIT = exports.PARAM_SKIP = exports.PARAM_NAME = exports.PARAM_VALUE = exports.PARAM_FIELD = exports.PARAMS_POSTFIX_ID = exports.STATUS_OUT_OF_DATE = exports.STATUS_ERROR = exports.STATUS_TRAINING = exports.STATUS_READY = exports.ROUTE_FRAME = exports.ROUTE_CONVERSE = exports.ROUTE_PARSE = exports.ROUTE_TRAIN = exports.ROUTE_WEBHOOK = exports.ROUTE_SETTINGS = exports.ROUTE_SAYING = exports.ROUTE_KEYWORD = exports.ROUTE_POST_FORMAT = exports.ROUTE_CATEGORY = exports.ROUTE_DOCUMENT = exports.ROUTE_CONTEXT = exports.ROUTE_AGENT = exports.ROUTE_ACTION = exports.MODEL_ALL = exports.MODEL_WEBHOOK = exports.MODEL_SETTINGS = exports.MODEL_SAYING = exports.MODEL_POST_FORMAT = exports.MODEL_KEYWORD = exports.MODEL_DOCUMENT = exports.MODEL_CATEGORY = exports.MODEL_FRAME = exports.MODEL_CONTEXT = exports.MODEL_AGENT = exports.MODEL_ACTION = exports.MODEL_RELATION_USED = exports.ERROR_FIELD_NOT_FOUND = exports.ERROR_VALIDATION = exports.ERROR_NOT_FOUND = exports.DEBUG_LEVEL_ERROR = exports.DEBUG_LEVEL_DEBUG = exports.DEBUG_LEVEL_INFO = void 0;
exports.SORT_DESC = exports.SORT_ASC = exports.NOHM_SUB_ALL = exports.NOHM_SUB_UNLINK = exports.NOHM_SUB_LINK = exports.NOHM_SUB_REMOVE = exports.NOHM_SUB_SAVE = exports.NOHM_SUB_UPDATE = exports.NOHM_SUB_CREATE = exports.DUCKLING_URL = exports.DUCKLING_QUANTITY = exports.DUCKLING_VOLUME = exports.DUCKLING_TEMPERATURE = exports.DUCKLING_DURATION = exports.DUCKLING_DISTANCE = exports.DUCKLING_TIME = exports.KEYWORD_PREFIX_SYS_REGEX = exports.KEYWORD_PREFIX_REGEX = exports.KEYWORD_PREFIX_SYS_DUCKLING = exports.KEYWORD_PREFIX_DUCKLING = exports.KEYWORD_PREFIX_SYS_SPACY = exports.KEYWORD_PREFIX_SPACY = exports.KEYWORD_PREFIX_SYS = exports.CSO_TIMEZONE_DEFAULT = exports.CSO_CONTEXT = exports.CSO_AGENT = exports.RASA_INTENT_SPLIT_SYMBOL = exports.RASA_MODEL_JUST_ER = exports.RASA_MODEL_DEFAULT = exports.RASA_MODEL_MODIFIERS = exports.RASA_MODEL_CATEGORY_RECOGNIZER = exports.RASA_ACTION_RANKING = exports.RASA_INTENT_RANKING = exports.RASA_REGEX_FEATURES = exports.RASA_COMMON_EXAMPLES = exports.RASA_ENTITY_SYNONYMS = exports.RASA_NLU_DATA = exports.RASA_LOADED_MODELS = exports.RASA_AVAILABLE_MODELS = exports.RASA_MAX_TRAINING_PROCESSES = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//DEBUG
const DEBUG_LEVEL_INFO = 'info';
exports.DEBUG_LEVEL_INFO = DEBUG_LEVEL_INFO;
const DEBUG_LEVEL_DEBUG = 'debug';
exports.DEBUG_LEVEL_DEBUG = DEBUG_LEVEL_DEBUG;
const DEBUG_LEVEL_ERROR = 'error'; //ERRORS

exports.DEBUG_LEVEL_ERROR = DEBUG_LEVEL_ERROR;
const ERROR_NOT_FOUND = 'not found';
exports.ERROR_NOT_FOUND = ERROR_NOT_FOUND;
const ERROR_VALIDATION = 'Validation failed. See .errors on this Error or the Nohm model instance for details.';
exports.ERROR_VALIDATION = ERROR_VALIDATION;
const ERROR_FIELD_NOT_FOUND = 'Field not found'; //MODELS

exports.ERROR_FIELD_NOT_FOUND = ERROR_FIELD_NOT_FOUND;
const MODEL_RELATION_USED = 'usedBy';
exports.MODEL_RELATION_USED = MODEL_RELATION_USED;
const MODEL_ACTION = 'Action';
exports.MODEL_ACTION = MODEL_ACTION;
const MODEL_AGENT = 'Agent';
exports.MODEL_AGENT = MODEL_AGENT;
const MODEL_CONTEXT = 'Context';
exports.MODEL_CONTEXT = MODEL_CONTEXT;
const MODEL_FRAME = 'Frame';
exports.MODEL_FRAME = MODEL_FRAME;
const MODEL_CATEGORY = 'Category';
exports.MODEL_CATEGORY = MODEL_CATEGORY;
const MODEL_DOCUMENT = 'Document';
exports.MODEL_DOCUMENT = MODEL_DOCUMENT;
const MODEL_KEYWORD = 'Keyword';
exports.MODEL_KEYWORD = MODEL_KEYWORD;
const MODEL_POST_FORMAT = 'PostFormat';
exports.MODEL_POST_FORMAT = MODEL_POST_FORMAT;
const MODEL_SAYING = 'Saying';
exports.MODEL_SAYING = MODEL_SAYING;
const MODEL_SETTINGS = 'Settings';
exports.MODEL_SETTINGS = MODEL_SETTINGS;
const MODEL_WEBHOOK = 'Webhook';
exports.MODEL_WEBHOOK = MODEL_WEBHOOK;
const MODEL_ALL = [MODEL_ACTION, MODEL_AGENT, MODEL_CONTEXT, MODEL_DOCUMENT, MODEL_CATEGORY, MODEL_KEYWORD, MODEL_SAYING, MODEL_SETTINGS, MODEL_WEBHOOK, MODEL_POST_FORMAT]; //ROUTES

exports.MODEL_ALL = MODEL_ALL;
const ROUTE_ACTION = 'action';
exports.ROUTE_ACTION = ROUTE_ACTION;
const ROUTE_AGENT = 'agent';
exports.ROUTE_AGENT = ROUTE_AGENT;
const ROUTE_CONTEXT = 'context';
exports.ROUTE_CONTEXT = ROUTE_CONTEXT;
const ROUTE_DOCUMENT = 'doc';
exports.ROUTE_DOCUMENT = ROUTE_DOCUMENT;
const ROUTE_CATEGORY = 'category';
exports.ROUTE_CATEGORY = ROUTE_CATEGORY;
const ROUTE_POST_FORMAT = 'postFormat';
exports.ROUTE_POST_FORMAT = ROUTE_POST_FORMAT;
const ROUTE_KEYWORD = 'keyword';
exports.ROUTE_KEYWORD = ROUTE_KEYWORD;
const ROUTE_SAYING = 'saying';
exports.ROUTE_SAYING = ROUTE_SAYING;
const ROUTE_SETTINGS = 'settings';
exports.ROUTE_SETTINGS = ROUTE_SETTINGS;
const ROUTE_WEBHOOK = 'webhook';
exports.ROUTE_WEBHOOK = ROUTE_WEBHOOK;
const ROUTE_TRAIN = 'train';
exports.ROUTE_TRAIN = ROUTE_TRAIN;
const ROUTE_PARSE = 'parse';
exports.ROUTE_PARSE = ROUTE_PARSE;
const ROUTE_CONVERSE = 'converse';
exports.ROUTE_CONVERSE = ROUTE_CONVERSE;
const ROUTE_FRAME = 'frame'; // STATUS

exports.ROUTE_FRAME = ROUTE_FRAME;
const STATUS_READY = 'Ready';
exports.STATUS_READY = STATUS_READY;
const STATUS_TRAINING = 'Training';
exports.STATUS_TRAINING = STATUS_TRAINING;
const STATUS_ERROR = 'Error';
exports.STATUS_ERROR = STATUS_ERROR;
const STATUS_OUT_OF_DATE = 'Out of Date'; //PARAMS ID

exports.STATUS_OUT_OF_DATE = STATUS_OUT_OF_DATE;
const PARAMS_POSTFIX_ID = 'Id';
exports.PARAMS_POSTFIX_ID = PARAMS_POSTFIX_ID;
const PARAM_FIELD = 'field';
exports.PARAM_FIELD = PARAM_FIELD;
const PARAM_VALUE = 'value';
exports.PARAM_VALUE = PARAM_VALUE;
const PARAM_NAME = 'name';
exports.PARAM_NAME = PARAM_NAME;
const PARAM_SKIP = 'skip';
exports.PARAM_SKIP = PARAM_SKIP;
const PARAM_LIMIT = 'limit';
exports.PARAM_LIMIT = PARAM_LIMIT;
const PARAM_DIRECTION = 'direction';
exports.PARAM_DIRECTION = PARAM_DIRECTION;
const PARAM_SESSION = 'sessionId';
exports.PARAM_SESSION = PARAM_SESSION;
const PARAM_FRAME = 'frame';
exports.PARAM_FRAME = PARAM_FRAME;
const PARAM_LOAD_FRAMES = 'loadFrames';
exports.PARAM_LOAD_FRAMES = PARAM_LOAD_FRAMES;
const PARAM_DEBUG = 'debug';
exports.PARAM_DEBUG = PARAM_DEBUG;
const PARAM_TEXT = 'text';
exports.PARAM_TEXT = PARAM_TEXT;
const PARAM_TIMEZONE = 'timezone';
exports.PARAM_TIMEZONE = PARAM_TIMEZONE;
const PARAM_BULK = 'bulk';
exports.PARAM_BULK = PARAM_BULK;
const PARAM_SEARCH = 'search';
exports.PARAM_SEARCH = PARAM_SEARCH;
const PARAM_FILTER = 'filter';
exports.PARAM_FILTER = PARAM_FILTER;
const PARAM_INCLUDE = 'include';
exports.PARAM_INCLUDE = PARAM_INCLUDE;
const PARAM_ACTION_ID = ROUTE_ACTION + PARAMS_POSTFIX_ID;
exports.PARAM_ACTION_ID = PARAM_ACTION_ID;
const PARAM_AGENT_ID = ROUTE_AGENT + PARAMS_POSTFIX_ID;
exports.PARAM_AGENT_ID = PARAM_AGENT_ID;
const PARAM_CATEGORY_ID = ROUTE_CATEGORY + PARAMS_POSTFIX_ID;
exports.PARAM_CATEGORY_ID = PARAM_CATEGORY_ID;
const PARAM_KEYWORD_ID = ROUTE_KEYWORD + PARAMS_POSTFIX_ID;
exports.PARAM_KEYWORD_ID = PARAM_KEYWORD_ID;
const PARAM_SAYING_ID = ROUTE_SAYING + PARAMS_POSTFIX_ID;
exports.PARAM_SAYING_ID = PARAM_SAYING_ID;
const PARAM_DOCUMENT_ID = ROUTE_DOCUMENT + PARAMS_POSTFIX_ID;
exports.PARAM_DOCUMENT_ID = PARAM_DOCUMENT_ID;
const PARAM_DOCUMENT_TIME_STAMP = 'time_stamp';
exports.PARAM_DOCUMENT_TIME_STAMP = PARAM_DOCUMENT_TIME_STAMP;
const PARAM_DOCUMENT_MAXIMUM_SAYING_SCORE = 'maximum_saying_score';
exports.PARAM_DOCUMENT_MAXIMUM_SAYING_SCORE = PARAM_DOCUMENT_MAXIMUM_SAYING_SCORE;
const PARAM_DOCUMENT_MAXIMUM_CATEGORY_SCORE = 'maximum_category_score';
exports.PARAM_DOCUMENT_MAXIMUM_CATEGORY_SCORE = PARAM_DOCUMENT_MAXIMUM_CATEGORY_SCORE;
const PARAM_DOCUMENT_TOTAL_ELAPSED_TIME = 'total_elapsed_time_ms';
exports.PARAM_DOCUMENT_TOTAL_ELAPSED_TIME = PARAM_DOCUMENT_TOTAL_ELAPSED_TIME;
const PARAM_DOCUMENT_RASA_RESULTS = 'rasa_results';
exports.PARAM_DOCUMENT_RASA_RESULTS = PARAM_DOCUMENT_RASA_RESULTS;
const PARAM_DOCUMENT_ACTION_RANKING = 'action_ranking';
exports.PARAM_DOCUMENT_ACTION_RANKING = PARAM_DOCUMENT_ACTION_RANKING;
const PARAM_DOCUMENT_AGENT_ID = 'agent_id';
exports.PARAM_DOCUMENT_AGENT_ID = PARAM_DOCUMENT_AGENT_ID;
const PARAM_DOCUMENT_AGENT_MODEL = 'agent_model';
exports.PARAM_DOCUMENT_AGENT_MODEL = PARAM_DOCUMENT_AGENT_MODEL;
const PARAM_DOCUMENT_SESSION = 'session';
exports.PARAM_DOCUMENT_SESSION = PARAM_DOCUMENT_SESSION;
const ROUTE_TO_MODEL = {
  [ROUTE_ACTION]: MODEL_ACTION,
  [ROUTE_AGENT]: MODEL_AGENT,
  [ROUTE_CONTEXT]: MODEL_CONTEXT,
  [ROUTE_DOCUMENT]: MODEL_DOCUMENT,
  [ROUTE_CATEGORY]: MODEL_CATEGORY,
  [ROUTE_KEYWORD]: MODEL_KEYWORD,
  [ROUTE_SAYING]: MODEL_SAYING,
  [ROUTE_SETTINGS]: MODEL_SETTINGS,
  [ROUTE_WEBHOOK]: MODEL_WEBHOOK,
  [ROUTE_POST_FORMAT]: MODEL_POST_FORMAT
};
exports.ROUTE_TO_MODEL = ROUTE_TO_MODEL;

const MODEL_TO_ROUTE = _lodash.default.invert(ROUTE_TO_MODEL); //CONFIG


exports.MODEL_TO_ROUTE = MODEL_TO_ROUTE;
const CONFIG_SETTINGS_RASA_URL = 'rasaURL';
exports.CONFIG_SETTINGS_RASA_URL = CONFIG_SETTINGS_RASA_URL;
const CONFIG_SETTINGS_DUCKLING_URL = 'ducklingURL';
exports.CONFIG_SETTINGS_DUCKLING_URL = CONFIG_SETTINGS_DUCKLING_URL;
const CONFIG_SETTINGS_DUCKLING_DIMENSION = 'ducklingDimension';
exports.CONFIG_SETTINGS_DUCKLING_DIMENSION = CONFIG_SETTINGS_DUCKLING_DIMENSION;
const CONFIG_SETTINGS_SPACY_ENTITIES = 'spacyPretrainedEntities';
exports.CONFIG_SETTINGS_SPACY_ENTITIES = CONFIG_SETTINGS_SPACY_ENTITIES;
const CONFIG_SETTINGS_CATEGORY_PIPELINE = 'categoryClassifierPipeline';
exports.CONFIG_SETTINGS_CATEGORY_PIPELINE = CONFIG_SETTINGS_CATEGORY_PIPELINE;
const CONFIG_SETTINGS_SAYING_PIPELINE = 'sayingClassifierPipeline';
exports.CONFIG_SETTINGS_SAYING_PIPELINE = CONFIG_SETTINGS_SAYING_PIPELINE;
const CONFIG_SETTINGS_KEYWORD_PIPELINE = 'keywordClassifierPipeline';
exports.CONFIG_SETTINGS_KEYWORD_PIPELINE = CONFIG_SETTINGS_KEYWORD_PIPELINE;
const CONFIG_SETTINGS_LANGUAGES = 'uiLanguages';
exports.CONFIG_SETTINGS_LANGUAGES = CONFIG_SETTINGS_LANGUAGES;
const CONFIG_SETTINGS_LANGUAGES_DEFAULT = 'uiLanguage';
exports.CONFIG_SETTINGS_LANGUAGES_DEFAULT = CONFIG_SETTINGS_LANGUAGES_DEFAULT;
const CONFIG_SETTINGS_LANGUAGES_AGENT = 'agentLanguages';
exports.CONFIG_SETTINGS_LANGUAGES_AGENT = CONFIG_SETTINGS_LANGUAGES_AGENT;
const CONFIG_SETTINGS_LANGUAGES_AGENT_DEFAULT = 'defaultAgentLanguage';
exports.CONFIG_SETTINGS_LANGUAGES_AGENT_DEFAULT = CONFIG_SETTINGS_LANGUAGES_AGENT_DEFAULT;
const CONFIG_SETTINGS_TIMEZONES = 'timezones';
exports.CONFIG_SETTINGS_TIMEZONES = CONFIG_SETTINGS_TIMEZONES;
const CONFIG_SETTINGS_TIMEZONES_DEFAULT = 'defaultTimezone';
exports.CONFIG_SETTINGS_TIMEZONES_DEFAULT = CONFIG_SETTINGS_TIMEZONES_DEFAULT;
const CONFIG_SETTINGS_RESPONSES_AGENT_DEFAULT = 'defaultAgentFallbackResponses';
exports.CONFIG_SETTINGS_RESPONSES_AGENT_DEFAULT = CONFIG_SETTINGS_RESPONSES_AGENT_DEFAULT;
const CONFIG_SETTINGS_DEFAULT_FALLBACK_ACTION_NAME = 'defaultaFallbackActionName';
exports.CONFIG_SETTINGS_DEFAULT_FALLBACK_ACTION_NAME = CONFIG_SETTINGS_DEFAULT_FALLBACK_ACTION_NAME;
const CONFIG_SETTINGS_SAYINGS_PAGE_SIZE = 'sayingsPageSize';
exports.CONFIG_SETTINGS_SAYINGS_PAGE_SIZE = CONFIG_SETTINGS_SAYINGS_PAGE_SIZE;
const CONFIG_SETTINGS_KEYWORDS_PAGE_SIZE = 'keywordsPageSize';
exports.CONFIG_SETTINGS_KEYWORDS_PAGE_SIZE = CONFIG_SETTINGS_KEYWORDS_PAGE_SIZE;
const CONFIG_SETTINGS_REVIEW_PAGE_SIZE = 'reviewPageSize';
exports.CONFIG_SETTINGS_REVIEW_PAGE_SIZE = CONFIG_SETTINGS_REVIEW_PAGE_SIZE;
const CONFIG_SETTINGS_MODIFIER_SAYINGS_PAGE_SIZE = 'modifierSayingsPageSize';
exports.CONFIG_SETTINGS_MODIFIER_SAYINGS_PAGE_SIZE = CONFIG_SETTINGS_MODIFIER_SAYINGS_PAGE_SIZE;
const CONFIG_SETTINGS_MODIFIER_ACTIONS = 'modifierActions';
exports.CONFIG_SETTINGS_MODIFIER_ACTIONS = CONFIG_SETTINGS_MODIFIER_ACTIONS;
const CONFIG_SETTINGS_MODIFIER_VALUE_SOURCE = 'modifierValueSources';
exports.CONFIG_SETTINGS_MODIFIER_VALUE_SOURCE = CONFIG_SETTINGS_MODIFIER_VALUE_SOURCE;
const CONFIG_SETTINGS_DEFAULT_UI_SESSION_ID = 'defaultUISessionId';
exports.CONFIG_SETTINGS_DEFAULT_UI_SESSION_ID = CONFIG_SETTINGS_DEFAULT_UI_SESSION_ID;
const CONFIG_KEYWORD_TYPE_LEARNED = 'learned';
exports.CONFIG_KEYWORD_TYPE_LEARNED = CONFIG_KEYWORD_TYPE_LEARNED;
const CONFIG_KEYWORD_TYPE_REGEX = 'regex';
exports.CONFIG_KEYWORD_TYPE_REGEX = CONFIG_KEYWORD_TYPE_REGEX;
const CONFIG_SETTINGS_RASA_TRAINING = [CONFIG_SETTINGS_RASA_URL, CONFIG_SETTINGS_DUCKLING_URL, CONFIG_SETTINGS_DUCKLING_DIMENSION, CONFIG_SETTINGS_SPACY_ENTITIES, CONFIG_SETTINGS_CATEGORY_PIPELINE, CONFIG_SETTINGS_SAYING_PIPELINE, CONFIG_SETTINGS_KEYWORD_PIPELINE];
exports.CONFIG_SETTINGS_RASA_TRAINING = CONFIG_SETTINGS_RASA_TRAINING;
const CONFIG_SETTINGS_DEFAULT_AGENT = [CONFIG_SETTINGS_RASA_URL, CONFIG_SETTINGS_DUCKLING_URL, CONFIG_SETTINGS_DUCKLING_DIMENSION, CONFIG_SETTINGS_SPACY_ENTITIES, CONFIG_SETTINGS_CATEGORY_PIPELINE, CONFIG_SETTINGS_SAYING_PIPELINE, CONFIG_SETTINGS_KEYWORD_PIPELINE, CONFIG_SETTINGS_SAYINGS_PAGE_SIZE, CONFIG_SETTINGS_KEYWORDS_PAGE_SIZE, CONFIG_SETTINGS_MODIFIER_SAYINGS_PAGE_SIZE, CONFIG_SETTINGS_REVIEW_PAGE_SIZE];
exports.CONFIG_SETTINGS_DEFAULT_AGENT = CONFIG_SETTINGS_DEFAULT_AGENT;
const CONFIG_SETTINGS_ALL = [CONFIG_SETTINGS_RASA_URL, CONFIG_SETTINGS_DUCKLING_URL, CONFIG_SETTINGS_DUCKLING_DIMENSION, CONFIG_SETTINGS_SPACY_ENTITIES, CONFIG_SETTINGS_CATEGORY_PIPELINE, CONFIG_SETTINGS_SAYING_PIPELINE, CONFIG_SETTINGS_KEYWORD_PIPELINE, CONFIG_SETTINGS_LANGUAGES, CONFIG_SETTINGS_LANGUAGES_DEFAULT, CONFIG_SETTINGS_LANGUAGES_AGENT, CONFIG_SETTINGS_LANGUAGES_AGENT_DEFAULT, CONFIG_SETTINGS_TIMEZONES, CONFIG_SETTINGS_TIMEZONES_DEFAULT, CONFIG_SETTINGS_DEFAULT_FALLBACK_ACTION_NAME, CONFIG_SETTINGS_RESPONSES_AGENT_DEFAULT, CONFIG_SETTINGS_SAYINGS_PAGE_SIZE, CONFIG_SETTINGS_KEYWORDS_PAGE_SIZE, CONFIG_SETTINGS_REVIEW_PAGE_SIZE, CONFIG_SETTINGS_MODIFIER_SAYINGS_PAGE_SIZE, CONFIG_SETTINGS_MODIFIER_ACTIONS, CONFIG_SETTINGS_MODIFIER_VALUE_SOURCE, CONFIG_SETTINGS_DEFAULT_UI_SESSION_ID]; //RASA Property names

exports.CONFIG_SETTINGS_ALL = CONFIG_SETTINGS_ALL;
const RASA_AVAILABLE_PROJECTS = 'available_projects';
exports.RASA_AVAILABLE_PROJECTS = RASA_AVAILABLE_PROJECTS;
const RASA_CURRENT_TRAINING_PROCESSES = 'current_training_processes';
exports.RASA_CURRENT_TRAINING_PROCESSES = RASA_CURRENT_TRAINING_PROCESSES;
const RASA_MAX_TRAINING_PROCESSES = 'max_training_processes';
exports.RASA_MAX_TRAINING_PROCESSES = RASA_MAX_TRAINING_PROCESSES;
const RASA_AVAILABLE_MODELS = 'available_models';
exports.RASA_AVAILABLE_MODELS = RASA_AVAILABLE_MODELS;
const RASA_LOADED_MODELS = 'loaded_models';
exports.RASA_LOADED_MODELS = RASA_LOADED_MODELS;
const RASA_NLU_DATA = 'rasa_nlu_data';
exports.RASA_NLU_DATA = RASA_NLU_DATA;
const RASA_ENTITY_SYNONYMS = 'entity_synonyms';
exports.RASA_ENTITY_SYNONYMS = RASA_ENTITY_SYNONYMS;
const RASA_COMMON_EXAMPLES = 'common_examples';
exports.RASA_COMMON_EXAMPLES = RASA_COMMON_EXAMPLES;
const RASA_REGEX_FEATURES = 'regex_features';
exports.RASA_REGEX_FEATURES = RASA_REGEX_FEATURES;
const RASA_INTENT_RANKING = 'intent_ranking';
exports.RASA_INTENT_RANKING = RASA_INTENT_RANKING;
const RASA_ACTION_RANKING = 'action_ranking';
exports.RASA_ACTION_RANKING = RASA_ACTION_RANKING;
const RASA_MODEL_CATEGORY_RECOGNIZER = '_category_recognizer';
exports.RASA_MODEL_CATEGORY_RECOGNIZER = RASA_MODEL_CATEGORY_RECOGNIZER;
const RASA_MODEL_MODIFIERS = 'modifiers';
exports.RASA_MODEL_MODIFIERS = RASA_MODEL_MODIFIERS;
const RASA_MODEL_DEFAULT = 'default_';
exports.RASA_MODEL_DEFAULT = RASA_MODEL_DEFAULT;
const RASA_MODEL_JUST_ER = 'just_er_';
exports.RASA_MODEL_JUST_ER = RASA_MODEL_JUST_ER;
const RASA_INTENT_SPLIT_SYMBOL = '+__+'; // Conversation State Object properties

exports.RASA_INTENT_SPLIT_SYMBOL = RASA_INTENT_SPLIT_SYMBOL;
const CSO_AGENT = 'agent';
exports.CSO_AGENT = CSO_AGENT;
const CSO_CONTEXT = 'context';
exports.CSO_CONTEXT = CSO_CONTEXT;
const CSO_TIMEZONE_DEFAULT = 'UTL'; // Keywords

exports.CSO_TIMEZONE_DEFAULT = CSO_TIMEZONE_DEFAULT;
const KEYWORD_PREFIX_SYS = 'sys.';
exports.KEYWORD_PREFIX_SYS = KEYWORD_PREFIX_SYS;
const KEYWORD_PREFIX_SPACY = 'spacy_';
exports.KEYWORD_PREFIX_SPACY = KEYWORD_PREFIX_SPACY;
const KEYWORD_PREFIX_SYS_SPACY = `${KEYWORD_PREFIX_SYS}${KEYWORD_PREFIX_SPACY}`;
exports.KEYWORD_PREFIX_SYS_SPACY = KEYWORD_PREFIX_SYS_SPACY;
const KEYWORD_PREFIX_DUCKLING = 'duckling_';
exports.KEYWORD_PREFIX_DUCKLING = KEYWORD_PREFIX_DUCKLING;
const KEYWORD_PREFIX_SYS_DUCKLING = `${KEYWORD_PREFIX_SYS}${KEYWORD_PREFIX_DUCKLING}`;
exports.KEYWORD_PREFIX_SYS_DUCKLING = KEYWORD_PREFIX_SYS_DUCKLING;
const KEYWORD_PREFIX_REGEX = 'regex_';
exports.KEYWORD_PREFIX_REGEX = KEYWORD_PREFIX_REGEX;
const KEYWORD_PREFIX_SYS_REGEX = `${KEYWORD_PREFIX_SYS}${KEYWORD_PREFIX_REGEX}`; // Duckling keyword

exports.KEYWORD_PREFIX_SYS_REGEX = KEYWORD_PREFIX_SYS_REGEX;
const DUCKLING_TIME = `${KEYWORD_PREFIX_DUCKLING}time`;
exports.DUCKLING_TIME = DUCKLING_TIME;
const DUCKLING_DISTANCE = `${KEYWORD_PREFIX_DUCKLING}distance`;
exports.DUCKLING_DISTANCE = DUCKLING_DISTANCE;
const DUCKLING_DURATION = `${KEYWORD_PREFIX_DUCKLING}duration`;
exports.DUCKLING_DURATION = DUCKLING_DURATION;
const DUCKLING_TEMPERATURE = `${KEYWORD_PREFIX_DUCKLING}temperature`;
exports.DUCKLING_TEMPERATURE = DUCKLING_TEMPERATURE;
const DUCKLING_VOLUME = `${KEYWORD_PREFIX_DUCKLING}volume`;
exports.DUCKLING_VOLUME = DUCKLING_VOLUME;
const DUCKLING_QUANTITY = `${KEYWORD_PREFIX_DUCKLING}duration`;
exports.DUCKLING_QUANTITY = DUCKLING_QUANTITY;
const DUCKLING_URL = `${KEYWORD_PREFIX_DUCKLING}quantity`; // Nohm subscribe actions

exports.DUCKLING_URL = DUCKLING_URL;
const NOHM_SUB_CREATE = 'create';
exports.NOHM_SUB_CREATE = NOHM_SUB_CREATE;
const NOHM_SUB_UPDATE = 'update';
exports.NOHM_SUB_UPDATE = NOHM_SUB_UPDATE;
const NOHM_SUB_SAVE = 'save';
exports.NOHM_SUB_SAVE = NOHM_SUB_SAVE;
const NOHM_SUB_REMOVE = 'remove';
exports.NOHM_SUB_REMOVE = NOHM_SUB_REMOVE;
const NOHM_SUB_LINK = 'link';
exports.NOHM_SUB_LINK = NOHM_SUB_LINK;
const NOHM_SUB_UNLINK = 'unlink';
exports.NOHM_SUB_UNLINK = NOHM_SUB_UNLINK;
const NOHM_SUB_ALL = [NOHM_SUB_CREATE, NOHM_SUB_UPDATE, NOHM_SUB_SAVE, NOHM_SUB_REMOVE, NOHM_SUB_LINK, NOHM_SUB_UNLINK]; // Sort

exports.NOHM_SUB_ALL = NOHM_SUB_ALL;
const SORT_ASC = 'ASC';
exports.SORT_ASC = SORT_ASC;
const SORT_DESC = 'DESC';
exports.SORT_DESC = SORT_DESC;
//# sourceMappingURL=constants.js.map