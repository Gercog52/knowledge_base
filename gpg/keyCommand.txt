gpg -a -e test.txt -r <email_key> - зашифровать файл
gpg -o test.txt -r <email_key> -d test.txt.asc - расшифровать файл
--export-secret-key - экспорт сикретного ключа
--gen-revoke - отзывает сик ключа 
--export-secret-subkeys - экспорт саб ключей
--export - экспорт паб ключа
