# It is is a shell script
# to run it => ./scripts/run-intergation.sh

# we need to run this script form root directory otherwise it will not able to find prisma schema

docker-compose up -d

# echo command is used to dispaly a text string
echo '🟡 - Waiting for database to be ready...'
# this is a script which lets you check are other services up and it will stay hung until that service comes up
./wait-for-it.sh "postgresql://postgres:mysecretpassword@localhost:5432/postgres" --
echo '🟢 - Database is ready!'

npx prisma migrate dev --name init
npm run test
docker-compose down
