from config.config import config
import logging
log = logging.getLogger('request')
print(config.get('redis', 'port'))

