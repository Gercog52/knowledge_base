Открываем

sudo vim /etc/nsswitch.conf

находим строчку
hosts:          files mdns4_minimal [NOTFOUND=return] dns mdns4
и удаляем [NOTFOUND=return].

Отключаем обнаружение домена .local

sudo vim /etc/default/avahi-daemon

AVAHI_DAEMON_DETECT_LOCAL=0

Сохраняемся, перезагружаемся. Решено!